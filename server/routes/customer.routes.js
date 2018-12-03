import { Router } from 'express';
import * as customerController from '../controllers/customer.controller';
const router = new Router();


// Get all customers
router.route('/customers').get(customerController.getCustomers);
router.route('/customer/:id').get(customerController.getCustomer);


export default router;
