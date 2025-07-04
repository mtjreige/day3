import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskitemComponent } from '../taskitem/taskitem';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, TaskitemComponent],
  templateUrl: './tasklist.html',
  styleUrls: ['./tasklist.css']
})
export class TasklistComponent {
  tasks = [
    { id: 1, title: 'Learn Angular' },
    { id: 2, title: 'Build Components' },
    { id: 3, title: 'Understand Directives' }
  ];

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
