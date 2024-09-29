import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { animalServices } from './animal.service';

const createAnimal = catchAsync(async (req, res) => {
  const result = await animalServices.createAnimalIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'post created successfully',
    data: result,
  });
});

export const animalControllers = {
  createAnimal,
};
