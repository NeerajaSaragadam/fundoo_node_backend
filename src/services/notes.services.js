import Notes from '../models/note.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import userModel from '../models/user.model';


//get all users
export const getAllNotes = async (UserID) => {
  console.log("get notes",UserID)
  const data = await Notes.find({UserID});
  console.log("rtiurn data", data)
  return data;
};

export const newNote = async (body) => {
    const data = await Notes.create(body)
    return data
};

export const updateNote = async (_id, body) => {
  const data = await Notes.findByIdAndUpdate(
    {
        _id
    },
    body,
    {
        new: true
    }
);
return data;
  
}


export const deleteNote = async (id) => {
  console.log(id)
  const data = await Notes.findByIdAndDelete(id);
  return data
}

export const getNote = async (id) => {
  const data = await Notes.findById(id);
  return data;
}