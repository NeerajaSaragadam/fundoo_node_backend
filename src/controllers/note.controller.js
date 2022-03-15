import HttpStatus from 'http-status-codes';
import * as NotesService from '../services/notes.services'

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllNotes = async (req, res, next) => {
  console.log("userid",req.body.data)

  try {
    req.body.UserID = req.body.data;
    const data = await NotesService.getAllNotes(req.body.UserID);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All notes fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const newNote = async (req, res, next) => {
    try {
      req.body.UserID = req.body.data;
      console.log(req.body)
        const data = await NotesService.newNote(req.body.UserID);
        res.status(HttpStatus.CREATED).json({
          code: HttpStatus.CREATED,
          data: data,
          message: ' NOTES CREATED successfully'
        });
      } catch (error) {
        next(error);
      }

}

export const updateNote = async(req, res, next) => {
  try {
    const data = await NotesService.updateNote(req.params._id,req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message : 'Notes update successfully'
    })
  } catch (err){
    next (err)
  }
}

export const deleteNote = async (req, res, next) => {
  try {
    const data = await NotesService.deleteNote(req.params.noteid);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message: 'Note Deleted Successfully'
    })
  } catch (err){
    next (err)
  }
}

export const getNote = async (req, res, next) => {
  try {
    const data = await NotesService.getNote(req.params._id)
    res.status(HttpStatus.OK).json({
      code : HttpStatus.OK,
      data : data,
      message : "Notes fetched successfully"
    })
  } catch (err){
    next (err);
  }
}