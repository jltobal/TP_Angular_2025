import { Component, Input, OnInit } from '@angular/core';
import { Cafe } from '../cafe-list/Cafe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  imports: [FormsModule],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.css',
})
export class InputNumberComponent {
  constructor() {}

  @Input()
  cafe!: Cafe;

  ngOnInit(): void {}

  downQuantity(cafe: Cafe): void {
    if (cafe.quantity > 0) {
      cafe.quantity--;
    }
  }

  upQuantity(cafe: Cafe): void {
    if (cafe.quantity < cafe.stock) {
      cafe.quantity++;
    }
  }

  changeQuantity(event: any, cafe: Cafe) {
    console.log(event);
  }
}
