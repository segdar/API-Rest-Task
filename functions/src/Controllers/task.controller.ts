import { Request, Response } from 'express';
import { TaskService } from "../services/task.service";

const taskService = new TaskService();
export class TaskController {

   

    static async createTask(req: Request, res: Response): Promise<any> {
        try {
            const { title, description, user_creation } = req.body;
            const taskinfo = await taskService.createTask({ title, description, user_creation, status: 0 });

            return res.status(200).json({
                value: taskinfo, status: true, error: ""
            });


        } catch (error) {
            return res.status(400).json({ value: "", status: false, error });
        }
    }


    static async getTask(req: Request, res: Response): Promise<any> {
        try {
            const id = req.params.taskId as string;
            const taskinfo = await taskService.getTask(id);
            if (taskinfo === null) {
                return res.status(200).json({ value: "", status: false, error: "" });
            }
            return res.status(200).json({ value: taskinfo, status: true, error: "" });

        } catch (error) {
            return res.status(400).json({ value: "", status: false, error });
        }

    }

    static async getTaskAll(req: Request, res: Response): Promise<any> {
        try {
            const taskinfo = await taskService.getAllTasks();
            if (taskinfo.length === 0) {
                return res.status(200).json({ value: "", status: false, error: "" });
            }

            return res.status(200).json({ value: taskinfo, status: true, error: "" });

        } catch (error) {
            return res.status(400).json({ value: "", status: false, error });
        }
      
            
    }

    static async updateTask(req: Request, res: Response): Promise<any> {

        try {

            const id = req.params.taskId as string;
            const { title, description, status } = req.body;
            await taskService.updateTask(id, { title, description, status });
            return res.status(200).json({ value: "Task updated", status: true, error: "" });


        } catch (error) {
            return res.status(400).json({ value: "", status: false, error });

        }
    }

    static async deleteTask(req: Request, res: Response): Promise<any> {
        try {
            const id = req.params.taskId as string;
            await taskService.deleteTask(id);
            return res.status(200).json({ value: "Task deleted", status: true, error: "" });

        } catch (error) {
            return res.status(400).json({ value: "", status: false, error });
        }

    }

   

}