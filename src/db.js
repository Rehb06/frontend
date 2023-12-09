import mongoose from 'mongoose';

export const connectDB = async ()=>{
    try {
        const url = 'mongodb+srv://l19450177:Rehb.2001@cluster0.v87bl6r.mongodb.net/?retryWrites=true&w=majority'
        //await mongoose.connect('mongodb://127.0.0.1/sistema');
        await mongoose.connect(url);
        console.log('base de datos conectada');
    } catch (error) {
        console.log(error);
    }
    
}
