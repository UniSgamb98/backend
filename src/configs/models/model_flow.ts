import { ObjectId } from "mongodb";

export default class Flow {
    constructor(
        public title: string, 
        public description: string, 
        public id?: ObjectId) {}
}

/* DA AGGIUNGERE
    node[]: {
    },

    edge[]: {
    }*/