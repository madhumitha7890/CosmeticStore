import express from 'express';
import { addToCart ,removeFromCart,getCart} from '../Controllers/CartController.js';
import authMiddleware from '../Middlewares/auth.js';
const CartApp=express.Router();
CartApp.post("/add",authMiddleware,addToCart)
CartApp.post("/remove",authMiddleware,removeFromCart)
CartApp.post("/get",authMiddleware,getCart)

export default CartApp;