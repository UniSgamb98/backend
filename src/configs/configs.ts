import dotenv from "dotenv";
dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_COLLECTION = process.env.MONGO_COLLECTION || '';
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.p6lewmw.mongodb.net/${MONGO_COLLECTION}`;

export const config = {
    mongo: {
        url: MONGO_URL
    }
}