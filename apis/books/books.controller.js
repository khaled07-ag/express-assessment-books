const Book = require("../../models/books");

const createBook = async (req,res,next)=>{
    try {
        if(req.file){
            req.body.image = req.file.path;
        }
        const newBook = await Book.create(req.body);
        return res.status(201).json({data: newBook});
    } catch (error) {
     next(error);
    }
}

const getAllBooks = async (req,res,next)=>{
    try {
        const books = await Book.find();
        return res.status(200).json({data: books});
    } catch (error) {
        next(error);
    }
}

const getOneBook = async (req, res , next)=>{
    try {
        const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    return res.status(200).json({data: book});
    } catch (error) {
        next(error);
    }
}

const deleteBook = async (req,res,next)=>{
    try {
        const bookRemoved = await Book.findByIdAndDelete(req.params.id);
        return res.status(200).json(bookRemoved);
    } catch (error) {
        next(error);
    }
}

const updateBook = async (req , res , next)=>{
    try {
        const bookUpdated = await Book.findByIdAndUpdate(req.params.id,req.body);
        if (!bookUpdated) return res.status(404).json("Book not found");
        return res.status(200).json({data: bookUpdated})
    } catch (error) {
        next(error);
    }
}

module.exports = {createBook,getAllBooks,getOneBook,deleteBook,updateBook};