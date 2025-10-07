import { User } from '../models/user';
import { AppError } from '../utils/appError';
import jwt from 'jsonwebtoken';

export const signup = async (email: string, password: string) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new AppError('Email already registered', 400);

  const user = await User.create({ email, password });
  return user;
};

export const signin = async (email: string, password: string) => {
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    throw new AppError('Invalid email or password', 401);
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '1h',
  });

  return { user, token };
};
