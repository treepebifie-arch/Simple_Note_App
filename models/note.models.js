const mongoose = require ('mongoose')

const noteSchema = new mongoose.Schema ({
    title: String,
    content: String,
    category: String,
    pinned: Boolean,
    locked: Boolean, 
}, {
    timestamps: true,
    versionKey: false,
});

const Note = mongoose.model ('Note', noteSchema)

module.exports = Note;