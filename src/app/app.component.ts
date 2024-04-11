
import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

export interface User {
  name: string;
  email: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Doe', email: 'jane.doe@example.com' },
    { name: 'Alice Smith', email: 'alice.smith@example.com' },
    { name: 'Bob Smith', email: 'bob.smith@example.com' },
  ];

  initialValue: number = 0;
  title = 'angular';

  onValueChange(event: number) {
    console.log('New value:', event);
  }
}