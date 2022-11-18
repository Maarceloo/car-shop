import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycles from '../../../src/Domains/Motorcycle';
import IMotorcycles from '../../../src/Interfaces/IMotorcycle';
import MotorcyclesService from '../../../src/Services/MotorcycleService';

describe('Verifica atuação do CRUD na rota /motorcycles no arquivo SERVICE', function () {
  const service = new MotorcyclesService();
  const motoInput: IMotorcycles = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.0,
    category: 'Street',
    engineCapacity: 600,
  };
  const motoOutput: Motorcycles = new Motorcycles({ id: '1', ...motoInput });

  it('Verifica o funcionamento da função REGISTER', async function () {
    Sinon.stub(Model, 'create').resolves(motoOutput);
    const result = await service.register(motoInput);

    expect(result).to.be.deep.equal(motoOutput);
    Sinon.restore();

    Sinon.stub(Model, 'create').resolves(null);
    const resultError = await service.register(motoInput);

    expect(resultError).to.be.deep.equal(null);
  });

  it('Verifica o funcionamento da função FINDALL', async function () {
    Sinon.stub(Model, 'find').resolves([motoOutput]);

    const result = await service.findAll();

    expect(result).to.be.deep.equal([motoOutput]);
  });

  it('Verifica o funcionamento da função FINDBYID', async function () {
    Sinon.stub(Model, 'findById').resolves(motoOutput);

    const result = await service.findById('1');

    expect(result).to.be.deep.equal(motoOutput);
  });

  it('Verifica o funcionamento da função UPDATE', async function () {
    Sinon.stub(Model, 'create').resolves(motoOutput);

    await service.register(motoInput);

    const motoUpdate: IMotorcycles = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.0,
      category: 'Street',
      engineCapacity: 800,
    };

    Sinon.stub(Model, 'findByIdAndUpdate').resolves({ id: '1', ...motoUpdate });
    const result = await service.updateMotoId('1', motoUpdate);

    expect(result).to.be.deep.equal({ id: '1', ...motoUpdate });
  });

  it('Verifica o funcionamento da função DELETE', async function () {
    Sinon.stub(Model, 'create').resolves(motoOutput);

    await service.register(motoInput);

    Sinon.stub(Model, 'findByIdAndDelete').resolves({});
    const result = await service.deleteMotoId('1');

    expect(result).to.be.deep.equal({});
  });

  afterEach(function () {
    Sinon.restore();
  });
});
