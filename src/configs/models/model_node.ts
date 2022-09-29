import { ObjectId } from "mongodb";

export default class Node {
    constructor(
        public type: string, 
        public title: number, 
        public description: number, 
        public difficulty: number,
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
