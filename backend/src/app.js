import express from 'express';
import productRoutes from './routes/routes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(productRoutes);

export default app;