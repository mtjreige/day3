import { Component } from '@angular/core';
import { TasklistComponent } from './tasklist/tasklist';  // import your main component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TasklistComponent],  // import child component here
  template: `<app-tasklist></app-tasklist>`,  // inline template to render Tasklist
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'day3';
}
