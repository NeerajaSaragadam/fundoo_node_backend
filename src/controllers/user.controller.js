import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';


/**
 * Controller to get a single user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */


/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newUser = async (req, res, next) => {
  try {
    const data = await UserService.newUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    res.status(HttpStatus.CONFLICT).json({
      code: HttpStatus.CONFLICT,
      message: `${error}`
    });
  }
};

export const login = async (req, res, next) => {
  try {
    const data = await UserService.login(req.body)
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message: "Login Successfull",
      token : data
    }) 
  } catch (err){
    next (err)
  }
}



