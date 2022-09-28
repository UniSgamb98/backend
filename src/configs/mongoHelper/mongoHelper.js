const mongoose = require('mongoose');
var dbName = process.env.DB_NAME;
var dbPassword = process.env.DB_PASSWORD;
var dbURI = `mongodb+srv://AngeloC:${dbPassword}@cluster0.p6lewmw.mongodb.net/${dbName}`;

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