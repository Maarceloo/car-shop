import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoute from './Routes/Car.routes';
import motoRoute from './Routes/Motorcycles.routes';

const app = express();
app.use(express.json());
app.use('/cars', carRoute);
app.use('/motorcycles', motoRoute);
app.use(ErrorHandler.handle);

export default app;
