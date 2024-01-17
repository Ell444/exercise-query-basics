import authorsRouter from "./routes/authorsRoute.js";
import booksRouter from "./routes/booksRoute.js"
import cors from "cors";
import dotenv from "dotenv"; dotenv.config();
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

const {MONGO_URI} = process.env;

//Server setup
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({origin: '*'}));

//Routes
app.use('/authors', authorsRouter);
app.use('/books', booksRouter);

//Database & server run
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Mongo connected successfully.');
        app.listen(3000, () => {
            console.log('Server is listening on localhost 3000.');
        })
    }).catch(err => console.error(err));

