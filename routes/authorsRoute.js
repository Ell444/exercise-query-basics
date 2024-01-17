import Author from "../models/authors.js";
import express, { Router } from "express";

//Router Setup
const router = express.Router();
router.use(express.json());

//Create a resource
router.post('/', async (req, res) => {
    try {
        const author = new Author(req.body);
        await author.save();
        res.send(author);
    }catch(err) {
        res.status(400).send(err.message);
    }
});

//Read resource list
router.get('/', async (req, res) => {
    try {
        const authors = await Author.find();
        res.send(authors);
    }catch(err) {
        res.status(500).send(err.message);
    }
});

//Read single resource
router.get('/:id', async (req, res) => {
    try {
        const author = await Author.findbyId(req.params.id);
        res.send(author);
    }catch(err) {
        res.status(404).send(err.message);
    }
});

//Update resource
router.put('/:id', async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        author.set(req.body);
        await author.save();
        res.send(author);
    }catch(err) {
        res.status(404).send(err.message);
    }
});

//Delete resource
router.delete('/:id', async (req, res) => {
    try {
        await Author.findByIdAndDelete(req.params.id);
        res.send(`Author with ${req.params.id} deleted successfully.`);
    }catch(err) {
        res.status(404).send(err.message);
    }
});

export default router;
