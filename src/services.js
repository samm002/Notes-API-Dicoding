const { nanoid } = require('nanoid');
const notes = require('./notes');

const indexService = () => (
  'Welcome to my api'
);

const addNoteService = (title, tags, body) => {
  if (!title || !tags || !body) {
    throw new Error('Title, tags, and body are required');
  }

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const newNote = {
    title, tags, body, id, createdAt, updatedAt,
  };
  notes.push(newNote);

  return newNote;
};

const getAllNotesService = () => notes;

const getNoteByIdService = (id) => {
  const note = notes.filter((n) => n.id === id)[0];

  return note;
};

const editNoteByIdService = (id, title, tags, body) => {
  const updatedAt = new Date().toISOString();
  const index = notes.findIndex((note) => note.id === id);

  notes[index] = {
    ...notes[index],
    title,
    tags,
    body,
    updatedAt,
  };

  return notes[index];
};

const deleteNoteByIdService = (id) => {
  const index = notes.findIndex((note) => note.id === id);

  const deletedNote = notes[index];
  notes.splice(index, 1);

  return deletedNote;
};

module.exports = {
  indexService,
  addNoteService,
  getAllNotesService,
  getNoteByIdService,
  editNoteByIdService,
  deleteNoteByIdService,
};
