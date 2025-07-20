import { Component, OnInit } from '@angular/core';
import { CafeCartService } from '../cafe-cart.service';
import { Cafe } from '../cafe-list/Cafe';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafe-cart',
  imports: [CommonModule],
  templateUrl: './cafe-cart.component.html',
  styleUrl: './cafe-cart.component.css',
})
export class CafeCartComponent implements OnInit {
  cartList$: Observable<Cafe[]>;

  constructor(private cart: CafeCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {}
}
