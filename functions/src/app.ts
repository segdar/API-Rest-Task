import express from "express";
import userRoutes from "./Routes/user.routes";
import taskRouter from "./Routes/task.routes";

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRouter);

export default app;