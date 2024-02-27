import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// Controllers:

// Controllers are JavaScript functions or classes that handle the logic for specific routes.
// They contain the code that processes incoming requests, interacts with data (if needed), and sends back a response.
// For instance, a controller for "/products" might retrieve a list of products from a database and send it as a response.

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}); // empty obj to get all of them
    res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        return res.json(product);
    }
    res.status(404).json({ message: 'Product not found' });
});

export { getProducts, getProductById };
