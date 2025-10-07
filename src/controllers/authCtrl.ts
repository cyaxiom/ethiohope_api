import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import * as authService from '../services/authService';

export const signup = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await authService.signup(email, password);
  res.status(201).json({ message: 'User created', user });
});

export const signin = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const data = await authService.signin(email, password);
  res.status(200).json(data);
});
