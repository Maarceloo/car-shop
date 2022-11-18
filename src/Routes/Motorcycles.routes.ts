import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcycleController';

const motoRoute = Router();

motoRoute.post('/', (req, res, next) =>
  new MotorcyclesController(req, res, next).create());
  
motoRoute.get('/', (req, res, next) =>
  new MotorcyclesController(req, res, next).findAll());

motoRoute.get('/:id', (req, res, next) =>
  new MotorcyclesController(req, res, next).findById());

motoRoute.put('/:id', (req, res, next) =>
  new MotorcyclesController(req, res, next).updateMotoId());

motoRoute.delete('/:id', (req, res, next) =>
  new MotorcyclesController(req, res, next).deleteMotoId());

export default motoRoute;
