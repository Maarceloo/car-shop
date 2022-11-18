import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }

  public async findAll(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async findId(id: string) {
    return this.model.findById(id);
  }

  public async updateMotoId(_id: string, body: IMotorcycle) {
    return this.model.findOneAndUpdate({ _id }, { ...body }, { new: true });
  }
}

export default MotorcycleODM;
