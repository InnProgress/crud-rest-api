import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    date: Date
});

const Note = mongoose.model('Note', NoteSchema);

export default Note;