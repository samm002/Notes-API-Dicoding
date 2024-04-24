const service = require('./services');

const indexController = (req, res) => {
  try {
    const response = service.indexService();
    res.status(200).json({
      status: 'success',
      message: response,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

const addNoteController = (req, res) => {
  try {
    const { title, tags, body } = req.body;
    const newNote = service.addNoteService(title, tags, body);
    res.status(201).json({
      status: 'success',
      message: 'create note success',
      data: newNote,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

const getAllNotesController = (req, res) => {
  try {
    const notes = service.getAllNotesService();
    res.status(200).json({
      status: 'success',
      message: 'get all note success',
      data: notes,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

const getNoteByIdController = (req, res) => {
  try {
    const { id } = req.params;
    const note = service.getNoteByIdService(id);

    if (!note) {
      res.status(404).json({
        status: 'failed',
        message: `note with id : ${id} not found`,
      });
    } else {
      res.status(200).json({
        status: 'success',
        message: `get note by id ${id} succes`,
        data: note,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

const editNoteByIdController = (req, res) => {
  try {
    const { id } = req.params;
    const { title, tags, body } = req.body;

    if (!title || !tags || !body) {
      res.status(400).json({
        status: 'failed',
        message: 'title/tags/body cannot be empty',
      });
    }

    const editedNote = service.editNoteByIdService(id, title, tags, body);

    if (!editedNote) {
      res.status(404).json({
        status: 'failed',
        message: `note with id : ${id} not found`,
      });
    } else {
      res.status(200).json({
        status: 'success',
        message: `edit note by id ${id} succes`,
        data: editedNote,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

const deleteNoteByIdController = (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = service.deleteNoteByIdService(id);

    if (!deletedNote) {
      res.status(404).json({
        status: 'failed',
        message: `note with id : ${id} not found`,
      });
    } else {
      res.status(200).json({
        status: 'success',
        message: `delete note by id ${id} succes`,
        data: deletedNote,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

module.exports = {
  indexController,
  addNoteController,
  getAllNotesController,
  getNoteByIdController,
  editNoteByIdController,
  deleteNoteByIdController,
};
