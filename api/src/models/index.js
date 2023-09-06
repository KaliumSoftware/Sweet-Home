import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();
// const { DB_HOST } = process.env;

//? Prueba de base de datos
const connection = async () => {
    try {
        await mongoose.connect('mongodb+srv://kaliumsoftware:53IV298jpUmyI3Go@sweet-home.sa6vlsn.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Successful connection to the database');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

export default connection