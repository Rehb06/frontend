// En order.models.js
/*import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Relacionamos el pedido con el usuario que lo realizó
        required: true
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product', // Relacionamos el pedido con los productos
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    // Otros campos relacionados con los pedidos, como dirección de envío, estado del pedido, etc.
}, {
    timestamps: true
});

export default mongoose.model('Order', orderSchema);
*/
import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
 {
    Product: {
        type: String,
        required: true
    },
    DateOrder: {
        type: Number,
        default: 0.0,
        required: true
    },
    Status: {
        type: String,
        default: 2023,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
}
);//fin de ordersSchema

export default mongoose.model('Orders', ordersSchema);