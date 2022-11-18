import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCar(car: ICar | null): Car | null {
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

  public async findAll() {
    const carODM = new CarODM();
    const allCars = await carODM.find();
    const arrayCar = allCars.map((car: ICar) => this.createCar(car));
    return arrayCar;
  }

  public async findById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    return this.createCar(car as unknown as ICar);
  }

  public async updateCarId(id: string, body: ICar) {
    const carODM = new CarODM();
    const car = await carODM.findByIdAndUpdate(id, body);
    return this.createCar(car as unknown as ICar);
  }

  public async deleteCarId(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findByIdAndDelete(id);
    return car;
  }
}

export default CarService;