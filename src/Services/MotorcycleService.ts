import Motorcycles from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcyclesService {
  private createMoto(moto: IMotorcycle | null): Motorcycles | null {
    if (moto) {
      return new Motorcycles(moto);
    }

    return null;
  }
  
  public async register(moto: IMotorcycle) {
    const motoODM = new MotorcycleODM();
    const newMoto = await motoODM.create(moto);
    return this.createMoto(newMoto);
  }

  public async findAll() {
    const motoODM = new MotorcycleODM();
    const allMotos = await motoODM.find();
    const motos = allMotos.map((moto: IMotorcycle) => this.createMoto(moto));
    return motos;
  }

  public async findById(id: string) {
    const motoODM = new MotorcycleODM();
    const moto = await motoODM.findById(id);
    return this.createMoto(moto as unknown as IMotorcycle);
  }

  public async updateMotoId(id: string, body: IMotorcycle) {
    const motoODM = new MotorcycleODM();
    const moto = await motoODM.findByIdAndUpdate(id, body);
    return this.createMoto(moto as unknown as IMotorcycle);
  }

  public async deleteMotoId(id: string) {
    const motoODM = new MotorcycleODM();
    const moto = await motoODM.findByIdAndDelete(id);
    return moto;
  }
}

export default MotorcyclesService;