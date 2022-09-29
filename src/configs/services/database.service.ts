import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { flows?: mongoDB.Collection } = {}

export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient("mongodb+srv://AngeloC:asd123@cluster0.p6lewmw.mongodb.net/?retryWrites=true&w=majority");
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const flowsCollection: mongoDB.Collection = db.collection("flows");
 
  collections.flows = flowsCollection;
       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${flowsCollection.collectionName}`);
 }