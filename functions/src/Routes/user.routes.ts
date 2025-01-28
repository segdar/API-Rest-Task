import { Router } from 'express';
import { UserController } from '../Controllers/user.controller';



const router = Router();
router.get('/:email', UserController.getUser)
router.post('/', UserController.createUser);

export default router;