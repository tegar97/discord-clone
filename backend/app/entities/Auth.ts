import { ObjectType, Field, ID } from "type-graphql";
import crypto from 'crypto'

import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType({ description: "The Friend Request Info" })
export class friend_request {
    @Field(() => ID) 
    @Property()
    id: string;

    @Field() 
    @Property()
    name: string;
    
    @Field() 
    @Property()
    @Field() 
    username?: string;



}
@ObjectType({description: 'auth user model'})
export class Auth {
    @Field(()=> ID)
    _id: string;

    @Field()
    @Property()
    name?: string;

    @Field()
    @Property()
    token?: string;

    @Field()
    @Property({default: 'photo.png'})
    photo?: string;

    @Field()
    @Property({required: true})
    email!: string;

    @Field()
    @Property({required: true})
    username!: string;

    @Field()
    @Property({required: true})
    password!: string;

    
    @Field()
    @Property({required: true,default: new Date().toISOString()})
    createdAt?: string;

    @Field(type => [friend_request], { nullable:true})
    @Property({type : () => [friend_request]})
    friend_request?: friend_request[]

    @Field()
    @Property()
    passwordChangeAt? : Date

    @Field()
    @Property()
    passwordResetToken? : String

    @Field()
    @Property()
    passwordResetExpire? : String


    save: any;


}

export const AuthModel = getModelForClass(Auth);
