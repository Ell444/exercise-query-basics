import mongoose from "mongoose";

const {Schema, model} = mongoose;

const validateWebSite = {
    validator: value => value.includes('www.'), 
    message: props => `${props.value} is not a website, coglione.` 
};

const authorSchema = new Schema({
    name: {
        type: String,
        default: 'Unknown'
    },
    age: Number,
    famousFor: [String],
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    webSite: {
        type: String,
        validate: validateWebSite
    },
    status: {
        type: String,
        default: 'active',
        enum: ['active', 'retired', 'dead']
    },
});

const Author = model('Author', authorSchema);
export default Author;
