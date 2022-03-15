import express from 'express';
import * as noteController from '../controllers/note.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
router.get('',userAuth, noteController.getAllNotes);

//route to create a new user
router.post('', userAuth, noteController.newNote);

router.put('/:_id',userAuth,noteController.updateNote);

router.delete('/:noteid',userAuth,noteController.deleteNote);

 router.get('/:_id', userAuth, noteController.getNote);



// router.post('/login',  userController.login);

// //route to get a single user by their user id
// router.get('/:_id', userAuth, userController.getUser);

// //route to update a single user by their user id
// router.put('/:_id', userController.updateUser);

// //route to delete a single user by their user id
// router.delete('/:_id', userController.deleteUser);

export default router;
