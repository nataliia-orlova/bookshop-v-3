import express from 'express';
import {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser,
} from '../controllers/userController.js';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';

//  every route starts /api/users/ ...
router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router
    .route('/profile')
    //   protect these routes from anauth access
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);
router
    .route('/:id')
    .delete(protect, admin, deleteUser)
    .get(protect, admin, getUserByID)
    .put(protect, admin, updateUser);
export default router;
