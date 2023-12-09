import {z} from 'zod';

export const orderSchema = z.object({
    Product: z.string({
        required_error: 'Nombre del producto requerido'
    }),
    DateOrder: z.number({
        required_error: 'Fecha en que se hizo el pedido'
    }).optional(),
    Status: z.string({
        required_error: 'Estado del pedido (entregado/cancelado)'
    }).optional()
});//Finn de productSchema