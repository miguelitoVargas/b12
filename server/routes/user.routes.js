import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();


// // Update a user by cuid
// router.route('/update_user/:userID').put(UserController.updateUser);
// // Signup User
// router.route('/signup').post(UserController.addUser);
// Login User
router.route('/login').post(UserController.loginUser);

export default router;
