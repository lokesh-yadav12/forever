import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js'; // Ensure file extension is included
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// Load environment variables
dotenv.config();



// App Config
const app = express();
const port = process.env.PORT || 4000;

// // Connect to Database
connectDB();
connectCloudinary()

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}))

// API Endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.get('/', (req, res) => {
    res.send("API Working");
});

// Start Server
app.listen(port, () => console.log('Server started on port: ' + port))

// Handle Uncaught Exceptions
process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error', err);
    process.exit(1);
});
