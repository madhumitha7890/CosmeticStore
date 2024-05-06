import express from 'express';
import authMiddleware from '../Middlewares/auth.js';
import { placeOrder, userOrders } from '../Controllers/orderController.js';

const orderApp=express.Router();

orderApp.post("/place",authMiddleware,placeOrder)
orderApp.post("/userorders",authMiddleware,userOrders)
export default orderApp;