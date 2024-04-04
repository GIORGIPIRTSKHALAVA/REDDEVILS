import { Component, } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CounterComponent
  ],
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  initialValue: number = 0;
  title = 'angular';


  onValueChange(event: number) {
    console.log('New value:', event);

  }
} 
 

