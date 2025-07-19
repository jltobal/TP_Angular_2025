import { Injectable } from '@angular/core';
import { Cafe } from './cafe-list/Cafe';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CafeCartService {
  private _cartList: Cafe[] = [];
  cartList: BehaviorSubject<Cafe[]> = new BehaviorSubject(this._cartList);

  constructor() {}

  addToCart(cafe: Cafe) {
    let item: Cafe | undefined = this._cartList.find(
      (v1) => v1.variety == cafe.variety
    );
    if (!item) {
      this._cartList.push({ ...cafe });
    } else {
      item.quantity += cafe.quantity;
    }
  }
}
