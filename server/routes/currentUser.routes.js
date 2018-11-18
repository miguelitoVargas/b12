import { Router } from 'express';
import * as CurrentUserController from '../controllers/currentUser.controller';
// const requireLogin = require('../middlewares/requireLogin');

const router = new Router();

// Get current user
router.route('/current_user').get(CurrentUserController.checkCurrentUser);
// Logout current user

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
export default router;
