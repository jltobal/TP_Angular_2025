import { Component, OnInit } from '@angular/core';
import { CafeCartService } from '../cafe-cart.service';
import { Cafe } from '../cafe-list/Cafe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cafe-cart',
  imports: [],
  templateUrl: './cafe-cart.component.html',
  styleUrl: './cafe-cart.component.css',
})
export class CafeCartComponent implements OnInit {
  cartList: Cafe[] | undefined;
  constructor(private cart: CafeCartService) {
    cart.cartList.subscribe((Observable) => (this.cartList = Observable));
  }

  ngOnInit(): void {}
}
