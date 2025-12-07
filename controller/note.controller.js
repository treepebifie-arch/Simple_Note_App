const Note = require ('../models/note.models')

//create new Note
const newNotes = async (req, res) => {
    try {
        const {title, content, category, pinned, locked,} = req.body
        const newNote = new Note ({title, content, category, pinned:false, locked:false,});
        await newNote.save();
        return res.status(202).json('Note created successfully');        
    } catch (error) {
        console.log (error)
        return res.status(500).json('Internal Server Error')
    }
}

//Find all notes
const allNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        return res.status(200).json({notes, count:notes.length})
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal server error')
    }
};

// Find notes by Id
const findNotes = async (req, res) => {
    try {
        const {id} = req.params
        const note = await Note.findById(id);

        if (!note) {
            return res.status(404).json ('Cannot find note');
        }
        return res.status(200).json(note)
    } catch (error) {
        console.log (error) 
        return res.send(500).json('Internal Server Error')
    }
};

// Find Notes by title
const searchNotes = async (req, res) => {
    try {
        const {title} = req.query;
        const note = await Note.findOne({title});

        if (!note) {
            return res.status(404).json ('Cannot find note');
        }
        return res.status(200).json(note)
    } catch (error) {
        console.log (error) 
        return res.send(500).json('Internal Server Error')
    }
};

// Update by Id
const editNotes = async (req, res) => {
    try {
        const {id} = req.params
        const {title, content, category, pinned, locked} = req.body
        const updatedNote = await Note.findByIdAndUpdate(id, {title, content, category, pinned, locked},
            {new: true}
         );
        if (!updatedNote) {
            return res.status(404).json('Cannot find note')
        }
        return res.status (200).json(updatedNote)
    } catch (error) {
        console.log (error)
        return res.status(500).json('Internal server error')
    }
};

//Delete by Id
const deleteById = async (req, res) => {
   try {
    const {id} = req.params
    const deletedNotes = await Note.findByIdAndDelete (id)

    if(!deletedNotes) {
        return res.status(404).json('Note not found')
    }
     return res.status (200).json('deletedNotes')
   } catch (error) {
    console.log (error)
    return res.status(500).json('Internal Server error')
   }
};

// Search and Delete by Title
const deleteNotes = async (req, res) => {
   try {
    const {title} = req.query
    const deletedNotes = await Note.findOneAndDelete ({title})

    if(!deletedNotes) {
        return res.status(404).json('Note not found')
    }
     return res.status (200).json('deletedNotes')
   } catch (error) {
    console.log (error)
    return res.status(500).json('Internal Server error')
   }
};


module.exports = {newNotes, allNotes, findNotes, searchNotes, editNotes, deleteById, deleteNotes}
