import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config(); // must be above the env vars that you gonna use
import connectDB from './config/db.js';
// import products from './data/products.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
const port = process.env.PORT || 3001; //   to acces env vars write like so and a fallback

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

//  if in production - set the react build folder frontend/build
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));
    //  any route that is not from our api routes listed above - will be redirected to index.html
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    );
    //  if not in production use react server
} else {
    const __dirname = path.resolve();
    app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
    app.get('/', (req, res) => {
        res.send('API is running....');
    });
}

app.listen(port, () =>
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${port}`
    )
);
