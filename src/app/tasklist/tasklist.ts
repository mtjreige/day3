import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskitemComponent } from '../taskitem/taskitem';

interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, TaskitemComponent],
  templateUrl: './tasklist.html',
  styleUrls: ['./tasklist.css']
})
export class TasklistComponent {
   tasks: Task[] = [
    { id: 1, title: 'Learn Angular' },
    { id: 2, title: 'Build Components' },
    { id: 3, title: 'Understand Directives' }
  ];

  deleteTask(taskId: number) {
  const index = this.tasks.findIndex(task => task.id === taskId);  
  if (index !== -1) {
    this.tasks.splice(index, 1);
  }
}

}
