const express = require('express');

const router = express.Router();
const controller = require('./controllers');

router.get('/', controller.indexController);
router.get('/notes', controller.getAllNotesController);
router.get('/notes/:id', controller.getNoteByIdController);
router.post('/notes', controller.addNoteController);
router.put('/notes/:id', controller.editNoteByIdController);
router.delete('/notes/:id', controller.deleteNoteByIdController);

module.exports = router;
