import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCar(car: ICar): Car | null {
    if (car) {
      return new Car(car);
    }

    return null;
  }

  public async register(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCar(newCar);
  }
}

export default CarService;
