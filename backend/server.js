import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config(); // must be above the env vars that you gonna use
import connectDB from './config/db.js';
// import products from './data/products.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
const port = process.env.PORT || 5000; //   to acces env vars write like so and a fallback

connectDB(); // connect to MongoDB

const app = express();

//   Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  cookie parser middleware - will allow to access request.cookies.jwt
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`server running on port ${port}`));
