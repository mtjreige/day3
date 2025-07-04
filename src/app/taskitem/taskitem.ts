import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-taskitem',
  standalone: true,
  templateUrl: './taskitem.html',
  styleUrls: ['./taskitem.css']
})
export class TaskitemComponent {
  @Input() task: any;
  @Output() delete = new EventEmitter<number>();

  deleteTask() {
    this.delete.emit(this.task.id);
  }
}
