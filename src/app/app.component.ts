import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CafeListComponent } from './cafe-list/cafe-list.component';
import { CafeCartComponent } from "./cafe-cart/cafe-cart.component";
import { CafeTypesComponent } from "./cafe-types/cafe-types.component";
import { InputNumberComponent } from './input-number/input-number.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            RouterLink,
            CafeListComponent, 
            CafeCartComponent, 
            CafeTypesComponent,
            InputNumberComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cofe_mate';
}
