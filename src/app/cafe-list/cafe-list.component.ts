import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cafe } from './Cafe';
import { InputNumberComponent } from '../input-number/input-number.component';
import { CafeCartService } from '../cafe-cart.service';
import { CafeDataService } from '../cafe-data.service';

@Component({
  selector: 'app-cafe-list',
  standalone: true,
  imports: [CommonModule, FormsModule, InputNumberComponent],
  templateUrl: './cafe-list.component.html',
  styleUrl: './cafe-list.component.css',
})
export class CafeListComponent {
  constructor(
    private cart: CafeCartService,
    private cafeDataService: CafeDataService
  ) {}

  cafes: Cafe[] = [];

  ngOnInit(): void {
    this.cafeDataService.getAll().subscribe((cafes) => (this.cafes = cafes));
  }

  addToCart(cafe: Cafe): void {
    this.cart.addToCart(cafe);
    cafe.stock -= cafe.quantity;
    cafe.quantity = 0;
  }
}
