import express from 'express';
import carRoute from './Routes/Car.routes';

const app = express();
app.use(express.json());
app.use('/cars', carRoute);

export default app;
