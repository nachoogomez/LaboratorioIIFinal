import {Router} from 'express';
import { getProducts, createProduct, deleteProduct, updateProduct } from '../controllers/controllers.js';

const routes = Router();

routes.get('/products', getProducts);
routes.post('/products', createProduct);
routes.put('/products/:id', updateProduct);
routes.delete('/products/:id', deleteProduct);

export default routes;
