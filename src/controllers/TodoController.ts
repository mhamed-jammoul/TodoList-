import { JsonController, Get, Post, Put, Delete, Body, Param, QueryParams } from 'routing-controllers';
import 'reflect-metadata';
import { TaskDTO } from '../dto/task.dto';
import { TaskService } from '../services/task.services';

@JsonController('/tasks')
export class TodoController {
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  @Post('/')
  createTask(@Body() task: TaskDTO) {
    console.log("controller")
    console.log(task)
    const newTask = this.taskService.createTask(task);
    return newTask;
  } 

  //pagination
  @Get('/')
  getAllTasks(@QueryParams() queryParams: { limit?: number; offset?: number }) {
    const limit = queryParams.limit || 10;
    const offset = queryParams.offset || 0;
    const paginatedTasks = this.taskService.getAllTasks().slice(offset, offset + limit);
    return paginatedTasks;
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    const task = this.taskService.getTaskById(id);
    return task;
  }

  @Put('/:id')
  updateTask(@Param('id') id: string, @Body() updatedTask: Partial<TaskDTO>) {
    const updated = this.taskService.updateTask(id, updatedTask);
    return updated;
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    this.taskService.deleteTask(id);
    return 'Task is deleted';
  }
}
