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

const getAllAnimal = catchAsync(async (req, res) => {
  const result = await animalServices.getAllAnimalFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'post got successfully',
    data: result,
  });
});

const updateOwnPost = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.user;

  const result = await animalServices.userUpdateHisPostFromDB(
    postId,
    userId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'post updated successfully',
    data: result,
  });
});

export const animalControllers = {
  createAnimal,
  getAllAnimal,
  updateOwnPost,
};
