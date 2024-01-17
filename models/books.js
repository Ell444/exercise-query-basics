import mongoose from "mongoose";

const {Schema, model} = mongoose;

const bookSchema = new Schema({
    title: {
       type: String,
       required: true
    },
    year: Number,
    author: {
        type: String,
        default: 'Unknown'
    },
    genre: String
});

const Book = model('Book', bookSchema);
export default Book;