import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


//get all users

//create new user
export const newUser = async (body) => {
  const user = await User.findOne({email: body.email});
  if(user){
    throw new Error("user already exists");
  } else {
  const salt = await bcrypt.genSalt(10);
  body.password = await bcrypt.hash(body.password, salt);
  const data = await User.create(body);
  return data;
  }
};

//login a user 
export const login = async (body) => {
  const user = await User.findOne({email: body.email});
  if(user == null){
    throw new Error("user does not exist");
  } else {
    const validpass = await bcrypt.compare(body.password, user.password) ;
   
    if(validpass){
     let token = jwt.sign({id:user._id,firstName:user.firstName}, 'secretKey')
     body.token = token;
     return body.token
    } else {
      throw new Error("not a valid password")
    }
  }
} 

