import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cafe } from '../cafe-list/Cafe';
import { FormsModule } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-input-number',
  imports: [FormsModule],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.css',
})
export class InputNumberComponent {
  constructor() {}

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {}

  downQuantity(quantity: number): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity(quantity: number, max: number): void {
    if (this.quantity < max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit(max);
    }
  }

  changeQuantity(event: any, quantity: number) {
    if (isNaN(this.quantity) || this.quantity < 0) {
      this.quantity = 0;
    } else if (this.quantity > this.max) {
      this.quantity = this.max;
    }

    this.quantityChange.emit(this.quantity);
  }
}
