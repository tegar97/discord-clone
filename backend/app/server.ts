import cors from 'cors'
import "reflect-metadata";
import express from "express";
import { ApolloServer,PubSub } from "apollo-server-express";
import dotenv from 'dotenv'
import { buildSchema } from "type-graphql";
import { AuthResolver } from './resolvers/authResolver';
import connectDatabase from './config/server';

const pubsub = new PubSub();

dotenv.config({path: './config.env'})


const main = async () => {

  const schema = await buildSchema({
    resolvers: [
      AuthResolver
    ],
  
    
    emitSchemaFile: true,
    validate: false,
   
    
  });

  // create mongoose connectio
  connectDatabase()
    const server = new ApolloServer({schema,context: ({req,res})  => ({req,res,pubsub})});
    const app : any = express();
    server.applyMiddleware({app});

    app.use(cors())


    app.listen({ port:  process.env.PORT || 5000  }, () =>
   console.log(`🚀 Server ready and listening at ==> http://localhost${server.graphqlPath}`))
};


    
main().catch((error)=>{
  console.log(error, 'error');
})