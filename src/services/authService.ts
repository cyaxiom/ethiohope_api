import User, { IUser } from '../models/User';
import Role from '../models/Role';
import { AppError } from '../utils/appError';
import bcrypt from 'bcryptjs';

interface SignupInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username?: string;
  roleNames?: string[];
}

export const signup = async ({
  email,
  password,
  firstName,
  lastName,
  username,
  roleNames = ['student'],
}: SignupInput): Promise<IUser> => {
  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new AppError('Email already registered', 401);

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Fetch role documents dynamically
  const roles = await Role.find({ name: { $in: roleNames } });
  if (roles.length === 0) throw new AppError('Invalid role(s) provided', 400);

  // Create user
  const user = await User.create({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    username,
    roles: roles.map(r => r._id),
  });

  return user;
};