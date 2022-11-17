import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const motoRoute = Router();

motoRoute.post('/', (req, res, next) => new MotorcyclesController(req, res, next).create());

export default motoRoute;