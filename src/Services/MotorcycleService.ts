import Motorcycles from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcyclesService {
  private createMoto(moto: IMotorcycle): Motorcycles | null {
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
    const allMotos = await motoODM.findAll();
    const motos = allMotos.map((moto: IMotorcycle) => this.createMoto(moto));
    return motos;
  }

  public async findById(id: string) {
    const motoODM = new MotorcycleODM();
    const moto = await motoODM.findId(id);
    return this.createMoto(moto as unknown as IMotorcycle);
  }
}

export default MotorcyclesService;
