import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoute = Router();

carRoute.post('/', (req, res, next) => new CarController(req, res, next).create());
carRoute.get('/', (req, res, next) => new CarController(req, res, next).findAll());
carRoute.get('/:id', (req, res, next) => new CarController(req, res, next).findById());
carRoute.put('/:id', (req, res, next) => new CarController(req, res, next).updateCarId());

export default carRoute;