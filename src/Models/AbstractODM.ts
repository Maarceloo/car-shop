import {
  Model,
  models,
  Schema,
  model,
} from 'mongoose';
import ICar from '../Interfaces/ICar';
import IMotorcycles from '../Interfaces/IMotorcycle';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string) {
    return this.model.findById(id);
  }

  public async findOneAndUpdate(_id: string, body: ICar | IMotorcycles) {
    return this.model.findByIdAndUpdate({ _id }, { ...body }, { new: true });
  }

  public async findByIdAndDelete(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}

export default AbstractODM;
