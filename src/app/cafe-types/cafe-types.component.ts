import { Component } from '@angular/core';
import { CafeCartComponent } from "../cafe-cart/cafe-cart.component";
import { CafeListComponent } from "../cafe-list/cafe-list.component";

@Component({
  selector: 'app-cafe-types',
  imports: [CafeCartComponent, CafeListComponent],
  templateUrl: './cafe-types.component.html',
  styleUrl: './cafe-types.component.css'
})
export class CafeTypesComponent {

}
