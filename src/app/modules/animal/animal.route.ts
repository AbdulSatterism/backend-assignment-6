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

router.get('/', animalControllers.getAllAnimal);

router.patch(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(animalValidations.updateAnimalSchema),
  animalControllers.updateOwnPost,
);

router.delete(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user),
  animalControllers.deleteOwnPost,
);

router.patch(
  '/post-update-admin/:id',
  auth(USER_ROLE.admin),
  validateRequest(animalValidations.updateAnimalSchema),
  animalControllers.updatePostByAdmin,
);
router.delete(
  '/post-delete-admin/:id',
  auth(USER_ROLE.admin),
  animalControllers.deletePostByAdmin,
);

export const AnimalRoutes = router;
