import { Router } from 'express';
import CarController from '../Controllers/CarController';

const motoRoute = Router();

motoRoute.post('/', (req, res, next) => new CarController(req, res, next).create());

export default motoRoute;