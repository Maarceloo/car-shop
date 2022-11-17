import { NextFunction, Request, Response } from 'express';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car = new Car({ ...this.req.body });
    try {
      const newCar = await this.service.register(car as unknown as ICar);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
