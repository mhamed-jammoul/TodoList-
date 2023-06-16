"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const routing_controllers_1 = require("routing-controllers");
require("reflect-metadata");
const task_dto_1 = require("../dto/task.dto");
const task_services_1 = require("../services/task.services");
let TodoController = exports.TodoController = class TodoController {
    constructor() {
        this.taskService = new task_services_1.TaskService();
    }
    createTask(task) {
        const newTask = this.taskService.createTask(task);
        return newTask;
    }
    //pagination
    getAllTasks(queryParams) {
        const limit = queryParams.limit || 10;
        const offset = queryParams.offset || 0;
        const paginatedTasks = this.taskService.getAllTasks().slice(offset, offset + limit);
        return paginatedTasks;
    }
    getTaskById(id) {
        const task = this.taskService.getTaskById(id);
        return task;
    }
    updateTask(id, updatedTask) {
        const updated = this.taskService.updateTask(id, updatedTask);
        return updated;
    }
    deleteTask(id) {
        this.taskService.deleteTask(id);
        return 'Task is deleted';
    }
};
__decorate([
    (0, routing_controllers_1.Post)('/'),
    __param(0, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_dto_1.TaskDTO]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "createTask", null);
__decorate([
    (0, routing_controllers_1.Get)('/'),
    __param(0, (0, routing_controllers_1.QueryParams)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "getAllTasks", null);
__decorate([
    (0, routing_controllers_1.Get)('/:id'),
    __param(0, (0, routing_controllers_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "getTaskById", null);
__decorate([
    (0, routing_controllers_1.Put)('/:id'),
    __param(0, (0, routing_controllers_1.Param)('id')),
    __param(1, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "updateTask", null);
__decorate([
    (0, routing_controllers_1.Delete)('/:id'),
    __param(0, (0, routing_controllers_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "deleteTask", null);
exports.TodoController = TodoController = __decorate([
    (0, routing_controllers_1.Controller)('/tasks'),
    __metadata("design:paramtypes", [])
], TodoController);
