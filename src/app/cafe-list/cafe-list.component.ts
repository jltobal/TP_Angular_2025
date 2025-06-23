import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cafe } from './Cafe';

@Component({
  selector: 'app-cafe-list',
  standalone: true,
  imports: [CommonModule],
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
    image: "img/bra_1.jpg"
    },
    {
    variety : "Colombia",
    type : "Excelsa",
    price : 15300,
    size: "250gr",
    stock:  130,
    image : "img/col_1.jpg"
    },
     {
    variety : "Honduras",
    type : "Arabiga",
    price : 18200,
    size: "250gr",
    stock:  98,
    image : "img/honduras_1.jpg"
    },
     {
    variety : "Costa Rica",
    type : "Robusta",
    price : 21500,
    size: "250gr",
    stock:  75,
    image : "img/Crica_1.jpg"
    }
]

}
