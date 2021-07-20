import { Auth, AuthModel } from './../entities/Auth';
import { RegisterInput } from './typeDef';
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
}