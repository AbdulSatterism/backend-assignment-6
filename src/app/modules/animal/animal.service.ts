import httpStatus from 'http-status';
import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import { TAnimal } from './animal.interface';
import { Animal } from './animal.model';

const createAnimalIntoDB = async (payload: TAnimal) => {
  const userExist = await User.findById(payload.user);

  if (!userExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found');
  }

  const result = await Animal.create(payload);
  return result;
};

export const animalServices = {
  createAnimalIntoDB,
};
