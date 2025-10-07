import { z } from 'zod';

// Signup schema
export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  username: z.string().min(3).optional(),
  roles: z.array(z.string()).optional()
});

// Signin schema
export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});
