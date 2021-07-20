import { validateLogin, validateRegister } from './../util/validators';
import { Auth, AuthModel } from './../entities/Auth';
import { RegisterInput, LoginInput } from './typeDef';
import {Resolver,Mutation,Arg,Query} from 'type-graphql'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AuthenticationError, UserInputError } from 'apollo-server-express'

function genereteToken(user: {id : string , email : string,photo:string,name : string,username: string}) :any{
    return jwt.sign({
        id :  user.id,
        email : user.email,
        photo: user.photo,
        name: user.name,
        username: user.username,

    },'saya-adalah-seorang-pelajar-dan-anaks',{expiresIn: '1D'});
} 

@Resolver()
export class AuthResolver {

    @Query(() => Boolean)
    async Test() {
        return true
    }
    @Mutation(() => Auth)
    async register(@Arg("Data"){name,email,password,username} : RegisterInput) : Promise<Auth>{
        const {valid,errors} = validateRegister(name,email,password,username)
        if(!valid){
            throw new UserInputError('Errors',{errors})
        }   
        const userCheck = await AuthModel.findOne({email})
        if(userCheck){
            throw new UserInputError('Email Sudah Ada Yang Pakai',{
                errors : {
                    username : 'Email Sudah Ada Yang Pakai'
                }
            })
        }

        password =await bcrypt.hash(password,12);
        const newUser :any = await AuthModel.create({
            name,
            email,
            password,
            username
        })

        const token = genereteToken(newUser);

        return {
            ...newUser._doc,
            token

        }

    }
    @Mutation(() => Auth)
    async login(@Arg("data"){email,password} : LoginInput) : Promise<Auth> {
        
        const user : any = await AuthModel.findOne({email})
        const {valid ,errors} = validateLogin(email,password)
        if(!valid){
            throw new UserInputError('Errors',{errors})
        }
        if(!user){
            errors.include = 'User Not Found';
            throw new UserInputError('Wrong Crenditials',{errors})
        }
        const match = await bcrypt.compare(password , user.password)
        if(!match) {
            errors.password = 'Wrong Password , Check Again';
            throw new UserInputError('Wrong Password ',{errors})
        }
        const token = genereteToken(user)
        return { 
            ...user._doc,
            token
        }    
    } 

}