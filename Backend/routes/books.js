const express = require ('express');
const router = express.Router();
const Book = require('../models/Book');


router.get('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS " )
    try{
        const book = await Book.find(); 
        res.json(book);
        console.log(book);
    }catch(err){
        res.json({message: err})
    }
});

router.post('/add', async (req, res) => {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS " )
    const book = new Book({
        title: req.body.title,
        image: req.body.image,
        author: req.body.author,
        about: req.body.about,
    });
    
    try{
    const savedBook = await book.save();
        res.json(savedBook);
        console.log(savedBook);
     }catch(err){
        res.json({ message: err });
     }   
});

// router.put('/edit',(req,res) => {
//     res.send("Going to edit author")
// });

// router.delete('/delete',(req,res) => {
//     res.send("Going to delete author")
// });

module.exports = router;