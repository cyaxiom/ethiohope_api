import express from 'express';
import {signup} from '../controllers/auth.controller';
import { validateRequest } from '../middlewares/validate.request.middleware';
import { signupSchema} from '../validators/auth.validator';

const router = express.Router();

router.post('/signup', validateRequest(signupSchema), signup);

export default router;