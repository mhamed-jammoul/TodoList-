"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
class TaskService {
    constructor() {
        this.tasks = [];
    }
    getAllTasks() {
        return this.tasks;
    }
    getTaskById(id) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            return task;
        }
        throw new Error('Task not found');
    }
    createTask(task) {
        if (!task.title || !task.description) {
            throw new Error('Title, description, and status are required.');
        }
        this.tasks.push(task);
        return task;
    }
    updateTask(id, updatedTask) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            const testObj = Object.assign(task, updatedTask);
            if (!testObj.title || !testObj.description || ((testObj.status !== 'pending' && testObj.status !== 'completed'))) {
                throw new Error('Title, description, and status are required and Status must be either "pending" or "completed".');
            }
            return testObj;
        }
        throw new Error('Task not found');
    }
    deleteTask(id) {
        const taskIndex = this.tasks.findIndex((t) => t.id === id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            return 'Task is deleted';
        }
        throw new Error('Task not found');
    }
}
exports.TaskService = TaskService;
