import { Timestamp } from "firebase-admin/firestore";
import { Task } from "../Models/taks.model";
import db from "../config/dbnote.config";



export class TaskService {

	private collection = db.collection('task');

	async createTask(data: Omit<Task, 'id' | 'date_creation' >): Promise<string> {
		const task = await this.collection.add({
			...data,
			date_creation: Timestamp.now()
		});
		return task.id;
	}

	async getTask(id: string): Promise<Task | null> {
		const task = await this.collection.doc(id).get();
		if (!task.exists) return null;
		return { id: task.id, ...task.data() } as Task;
	}

	async getAllTasks(): Promise<Task[]> {

		const tasks = await this.collection.get();
		return tasks.docs.map((task) => ({ ...task.data(),id: task.id, date_creation: task.data().date_creation.toDate() } as Task));
		
	}

	async updateTask(id: string, data: Partial<Task>): Promise<void> {
		await this.collection.doc(id).update(data);
	}

	async deleteTask(id: string): Promise<void> {
		await this.collection.doc(id).delete();
	}




}