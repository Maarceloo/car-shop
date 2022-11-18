import IMotorcycles from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycles extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail'; 
  private engineCapacity: number;
  
  constructor(
    moto: IMotorcycles,
  ) {
    super(moto);
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }

  public setcategory(category: 'Street' | 'Custom' | 'Trail') {
    this.category = category;
  }

  public getcategory() {
    return this.category;
  }

  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}

export default Motorcycles;
