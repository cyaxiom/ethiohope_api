import express from 'express';
import {signup} from '../controllers/authCtrl';
import { validateRequest } from '../middlewares/validateRequest';
import { signupSchema} from '../validators/authValidator';

const router = express.Router();

router.post('/signup', validateRequest(signupSchema), signup);

export default router;