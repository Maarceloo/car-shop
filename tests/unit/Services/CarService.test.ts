import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Verifica atuação do CRUD na rota /cars no arquivo SERVICE', function () {
  const service = new CarService();
  const CarInput: ICar = {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  };
  const CarOutput: Car = new Car({ id: '1', ...CarInput });

  it('Verifica o funcionamento da função REGISTER', async function () {
    Sinon.stub(Model, 'create').resolves(CarOutput);
    const result = await service.register(CarInput);

    expect(result).to.be.deep.equal(CarOutput);
    Sinon.restore();

    Sinon.stub(Model, 'create').resolves(null);
    const resultError = await service.register(CarInput);

    expect(resultError).to.be.deep.equal(null);
  });

  it('Verifica o funcionamento da função FINDALL', async function () {
    Sinon.stub(Model, 'find').resolves([CarOutput]);

    const result = await service.findAll();

    expect(result).to.be.deep.equal([CarOutput]);
  });

  it('Verifica o funcionamento da função FINDBYID', async function () {
    Sinon.stub(Model, 'findById').resolves(CarOutput);

    const result = await service.findById('1');

    expect(result).to.be.deep.equal(CarOutput);
  });

  it('Verifica o funcionamento da função UPDATE', async function () {
    Sinon.stub(Model, 'create').resolves(CarOutput);

    await service.register(CarInput);

    const CarUpdate: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Azul',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    Sinon.stub(Model, 'findByIdAndUpdate').resolves({ id: '1', ...CarUpdate });
    const result = await service.updateCarId('1', CarUpdate);

    expect(result).to.be.deep.equal({ id: '1', ...CarUpdate });
  });

  it('Verifica o funcionamento da função DELETE', async function () {
    Sinon.stub(Model, 'create').resolves(CarOutput);

    await service.register(CarInput);

    Sinon.stub(Model, 'findByIdAndDelete').resolves({});
    const result = await service.deleteCarId('1');

    expect(result).to.be.deep.equal({});
  });

  afterEach(function () {
    Sinon.restore();
  });
});
