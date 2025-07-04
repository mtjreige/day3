import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Task{
  id: number;
  title: string;
}
@Component({
  selector: 'app-taskitem',
  standalone: true,
  templateUrl: './taskitem.html',
  styleUrls: ['./taskitem.css']
})
export class TaskitemComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<number>();

  deleteTask() {
    this.delete.emit(this.task.id);
  }
}
