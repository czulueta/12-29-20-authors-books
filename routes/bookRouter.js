const express = require("express")
const bookRouter = express.Router()
const Book = require("../models/book.js")

// get all books
bookRouter.get("/", (req, res, next) => {
    Book.find((err, books) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})
// add new book
bookRouter.post("/", (req, res, next) => {
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})
module.exports = bookRouter