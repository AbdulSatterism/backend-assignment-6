import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../auth/auth.const';
import { animalValidations } from './animal.validation';
import { animalControllers } from './animal.controller';

const router = express.Router();

router.post(
  '/create-animal',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(animalValidations.createAnimalSchema),
  animalControllers.createAnimal,
);

// router.get('/', categoryControllers.allCategory);

export const AnimalRoutes = router;
