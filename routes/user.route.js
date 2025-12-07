
const express = require ('express')

const router = express.Router();

const { 
    newNotes, 
    allNotes, 
    findNotes, 
    searchNotes, 
    editNotes, 
    deleteById, 
    deleteNotes } = require("../controller/note.controller");


router.post('/new-notes', newNotes)
router.get('/all-notes', allNotes)
router.get('/find-notes/:id', findNotes)
router.get('/search-notes', searchNotes)
router.put('/edit-notes/:id', editNotes)
router.delete('/delete-notes/:id', deleteById)
router.delete('/delete-notes', deleteNotes)


module.exports = router;
