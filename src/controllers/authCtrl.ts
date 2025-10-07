import { Request, Response} from 'express';
import * as authService from '../services/authService';
import asyncHandler from 'express-async-handler';

export const signup = asyncHandler(async (req: Request, res: Response) => {
  const { email, password, firstName, lastName, username, roles } = req.body;

  const user = await authService.signup({
    email,
    password,
    firstName,
    lastName,
    username,
    roleNames: roles,
  });

  res.status(201).json({ status: 'success', message: 'User created', user });
});
