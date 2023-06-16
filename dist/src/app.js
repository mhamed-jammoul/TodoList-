"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const TodoController_1 = require("./controllers/TodoController");
const PORT = 3000;
console.info(`Starting server on http://localhost:${PORT}`);
const app = (0, routing_controllers_1.createExpressServer)({
    controllers: [TodoController_1.TodoController],
});
app.listen(PORT, () => {
    console.info(`Server is running on http://localhost:${PORT}`);
});
