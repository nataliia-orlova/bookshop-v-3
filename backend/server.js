import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); // must be above the env vars that you gonna use
import connectDB from './config/db.js';
// import products from './data/products.js';
import productRoutes from './routes/productRoutes.js';
const port = process.env.PORT || 5000; //   to acces env vars write like so and a fallback

connectDB(); // connect to MongoDB

const app = express();

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/products', productRoutes);

app.listen(port, () => console.log(`server running on port ${port}`));