import express from 'express';
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import cors from 'cors';

//Importamos las rutas para usuarios
import authRoutes from './routes/auth.routes.js';
//Importamos las rutas para productos
import productRoutes from './routes/products.routes.js';
//Importamos las rutas para pedidos
import orderRoutes from './routes/order.routes.js';

const app = express();

app.use(cors({
    origin: [ 
                'http://localhost:5173',
                'http://127.0.0.1:5173',
                'http://localhost',
                'http://localhost/productos',
                'https://apiproductos-26ge.onrender.com',
                'https://backend-wc62.onrender.com',
],
    credentials:true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

//Indicamos que el servidor utilice el objeto authRoutes
app.use('/api', authRoutes);
app.use('/api/', productRoutes);
app.use('/api/', orderRoutes);
export default app;