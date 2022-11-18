import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import Motorcycles from '../Domains/Motorcycle';
import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcyclesService from '../Services/MotorcycleService';
import { messageInvalidID } from './CarController';

const messageMotocycleNotFound = { message: 'Motorcycle not found' };

class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async create() {
    const moto = new Motorcycles({ ...this.req.body });
    try {
      const newMoto = await this.service.register(
        moto as unknown as IMotorcycles,
      );
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const moto = await this.service.findAll();
      return this.res.status(200).json(moto);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;

    try {
      if (!isValidObjectId(id)) return this.res.status(422).json(messageInvalidID);

      const moto = await this.service.findById(id);

      if (!moto) return this.res.status(404).json(messageMotocycleNotFound);

      return this.res.status(200).json(moto);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateMotoId() {
    const { id } = this.req.params;
    const { body } = this.req;

    try {
      if (!isValidObjectId(id)) return this.res.status(422).json(messageInvalidID);

      const moto = await this.service.updateMotoId(id, body);
      
      if (!moto) return this.res.status(404).json(messageMotocycleNotFound);

      return this.res.status(200).json(moto);
    } catch (error) {
      this.next(error);
    }
  }

  public async deleteMotoId() {
    const { id } = this.req.params;

    try {
      if (!isValidObjectId(id)) return this.res.status(422).json(messageInvalidID);

      const moto = await this.service.deleteMotoId(id);

      if (!moto) return this.res.status(404).json(messageMotocycleNotFound);

      return this.res.status(204).json();
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcyclesController;