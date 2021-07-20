import { Auth } from './../entities/Auth';
import {Field, InputType  } from 'type-graphql'


//===================================== Type Auth ====================================
@InputType()
export class RegisterInput implements Partial<Auth>{
   
    @Field()
    name: string;

    @Field()
    email : string;

    @Field()
    username : string;


    @Field()
    password: string;




}