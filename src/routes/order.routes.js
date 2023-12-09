// En order.routes.js
/*import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { createOrder, getOrders, getOrder, updateOrder, deleteOrder } from '../controllers/order.controller.js';

const router = Router();

// Rutas para pedidos
router.post('/orders', authRequired, createOrder);
router.get('/orders', authRequired, getOrders);
router.get('/orders/:id', authRequired, getOrder);
router.put('/orders/:id', authRequired, updateOrder);
router.delete('/orders/:id', authRequired, deleteOrder);

export default router;
*/
import {Router} from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import {
    getOrders,
    createOrder,
    getOrder,
    deleteOrder,
    updateOrder
} from '../controllers/order.controller.js'

//Importamos el validatorSchema
import {validateSchema} from '../middlewares/validator.middleware.js';
//Import los esquemas de validacion
import { orderSchema} from '../schemas/order.schemas.js';

const router = Router();

//Obtener todos los productos
router.get ('/pedidos', authRequired, getOrders );

//Agregar un producto
router.post('/pedidos', authRequired, validateSchema(orderSchema), createOrder);

//Obtener un producto por id
router.get ('/pedidos/:id', authRequired, getOrder);

//Eliminar un producto
router.delete('/pedidos/:id', authRequired, deleteOrder);

//Actualizar un producto
router.put('/pedidos/:id', authRequired, updateOrder);

export default router;