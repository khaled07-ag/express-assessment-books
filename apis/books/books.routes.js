const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  createBook,
  deleteBook,
  updateBook,
  getOneBook
} = require('./books.controller');
const upload = require('../../middleware/multer');

router.get('/', getAllBooks);
router.get('/:id', getOneBook);
router.post('/',upload.single("image") , createBook);

router.delete('/:id', deleteBook);

router.put('/:id', updateBook);

module.exports = router;