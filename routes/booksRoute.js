import Book from "../models/books.js";
import express, { Router } from "express";

//Router Setup
const router = express.Router();
router.use(express.json());

//Create a resource
router.post('/', async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.send(book);
    }catch(err) {
        res.status(400).send(err.message);
    }
});

//Read resource list
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.send(books);
    }catch(err) {
        res.status(500).send(err.message);
    }
});

//Read single resource
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.send(book);
    }catch(err) {
        res.status(404).send(err.message);
    }
});

//Update resource
router.put('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        book.set(req.body);
        await book.save();
        res.send(book);
    }catch(err) {
        res.status(404).send(err.message);
    }
});

//Delete resource
router.delete('/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.send(`Book with ID ${req.params.id} deleted successfully.`);
    }catch(err) {
        res.status(404).send(err.message);
    }
});

export default router;