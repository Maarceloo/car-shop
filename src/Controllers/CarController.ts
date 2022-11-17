import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
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

  public async findAll() {
    try {
      const cars = await this.service.findAll();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;

    try {
      if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });

      const car = await this.service.findById(id);
      
      if (!car) return this.res.status(404).json({ message: 'Car not found' });

      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCarId() {
    const { id } = this.req.params;
    const { body } = this.req;

    try {
      if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });

      const car = await this.service.updateCarId(id, body);
      
      if (!car) return this.res.status(404).json({ message: 'Car not found' });

      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
