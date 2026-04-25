// task.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // Only static data - 5 tasks
  public tasks = [
    { id: 1, title: 'Complete Project Report', description: 'Prepare and submit monthly report', status: '', assignedTo: null },
    { id: 2, title: 'Fix Login Bug', description: 'Resolve authentication issue', status: '', assignedTo: null },
    { id: 3, title: 'Design Database Schema', description: 'Create ER diagram for new feature', status: '', assignedTo: null },
    { id: 4, title: 'Write Unit Tests', description: 'Write test cases for components', status: '', assignedTo: null },
    { id: 5, title: 'Update Documentation', description: 'Update API docs and user manual', status: '', assignedTo: null }
  ];

  constructor() { }
}