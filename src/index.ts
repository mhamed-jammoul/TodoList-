import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { TodoController } from './controllers/TodoController';

const PORT = 3000;

console.info(`Starting server on http://localhost:${PORT}`);

const app = createExpressServer({
  controllers: [TodoController],
});

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
});
