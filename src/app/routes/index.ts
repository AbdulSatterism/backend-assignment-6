import { Router } from 'express';
// import { BikeRoutes } from '../modules/bike/bike.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/bikes',
    route: "BikeRoutes",
  }
 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
