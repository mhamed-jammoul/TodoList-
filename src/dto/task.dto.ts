export class TaskDTO {
    id: string;
    title: string;
    description: string;
    status: string;
  
    constructor() {
      this.id = '';
      this.title = '';
      this.description = '';
      this.status = 'pending';
    }
  }
  