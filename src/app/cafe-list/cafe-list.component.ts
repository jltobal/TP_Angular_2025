import { Component } from '@angular/core';
import { Cafe } from './Cafe';

@Component({
  selector: 'app-cafe-list',
  standalone: true,
  imports: [],
  templateUrl: './cafe-list.component.html',
  styleUrl: './cafe-list.component.css'
})
export class CafeListComponent {

  cafes : Cafe[] = [
    {
    variety : "Brasil",
    type : "Arabiga",
    price : 14200,
    size: "250gr",
    stock:  293,
    image : "assets/img/bra_1.jpg"
    },
    {
    variety : "Colombia",
    type : "Arabiga",
    price : 15300,
    size: "250gr",
    stock:  130,
    image : "assets/img/col_1.jpg"
    }
]

}
