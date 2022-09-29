import { ObjectId } from "mongodb";

export default class Edge {
    constructor(
        public type: string, 
        public title: number, 
        public id?: ObjectId) {}
}

/* DA AGGIUNGERE
    data: {
        type: {},
       // required: true
    },

    reactFlow: {
        type: {},
       // required: true
    }*/