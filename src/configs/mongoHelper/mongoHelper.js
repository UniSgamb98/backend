const mongoose = require('mongoose');
/*const Node = require('../models/model_node');
const Edge = require('../models/model_edge');
const Flow = require('../models/model_flow');*/
var dbName = process.env.DB_NAME;
var dbPassword = process.env.DB_PASSWORD;
var dbURI = `mongodb+srv://AngeloC:${dbPassword}@cluster0.p6lewmw.mongodb.net/?retryWrites=true&w=majority`;
//  mongodb+srv://AngeloC:asd123@cluster0.p6lewmw.mongodb.net/?retryWrites=true&w=majority

const helper = {
    connect : async () => {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err)=>{
            if(err){
                console.log("[MONGO_HELPER] ERROR:", err);
            }else{
                console.log("[MONGO_HELPER] collegato al db:", dbName);
            }
        });
    },

    getConnection : () => {
        return mongoose.connection || null;
    },
    
    disconnect : async () => {
        if(mongoose.connection) await mongoose.connection.close();
        if(mongod) await mongod.stop();
        console.log("[MONGO_HELPER] disconnecting from db!");
    },
}

module.exports = helper;