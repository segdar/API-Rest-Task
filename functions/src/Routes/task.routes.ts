import { Router } from "express";
import { TaskController } from "../Controllers/task.controller";

const router = Router();    


router.get('/', TaskController.getTaskAll);
router.post('/', TaskController.createTask);
router.put('/:taskId', TaskController.updateTask);
router.delete('/:taskId', TaskController.deleteTask);

export default router;