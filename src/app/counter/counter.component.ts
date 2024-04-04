import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <button (click)="decrement()">-</button>
    <span>{{ count }}</span>
    <button (click)="increment()">+</button>
  `,
  styles: []
})
export class CounterComponent {
  @Input() initialValue: number = 0;
  @Output() valueChange = new EventEmitter<number>();

  count = this.initialValue;

  increment() {
    this.count++;
    this.valueChange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.valueChange.emit(this.count);
  }
}