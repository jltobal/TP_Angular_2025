import { Component, OnInit } from '@angular/core';
import { CafeCartService } from '../cafe-cart.service';

@Component({
  selector: 'app-cafe-cart',
  imports: [],
  templateUrl: './cafe-cart.component.html',
  styleUrl: './cafe-cart.component.css',
})
export class CafeCartComponent implements OnInit {
  constructor(private cart: CafeCartService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
