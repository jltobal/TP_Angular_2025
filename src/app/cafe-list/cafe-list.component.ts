import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cafe } from './Cafe';

@Component({
  selector: 'app-cafe-list',
  standalone: true,
  imports: [CommonModule,
            FormsModule,
  ],
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
    image: "img/bra_1.jpg",
    clearance : false,
    quantity: 0,
    },
    {
    variety : "Colombia",
    type : "Excelsa",
    price : 15300,
    size: "250gr",
    stock:  130,
    image : "img/col_1.jpg",
    clearance : true,
    quantity: 0,
    },
     {
    variety : "Honduras",
    type : "Arabiga",
    price : 18200,
    size: "250gr",
    stock:  98,
    image : "img/honduras_1.jpg",
    clearance : false,
    quantity: 0,
    },
     {
    variety : "Costa Rica",
    type : "Robusta",
    price : 21500,
    size: "250gr",
    stock:  28,
    image : "img/Crica_1.jpg",
    clearance : false,
    quantity: 0,
    }
]

downQuantity(cafe : Cafe) : void{
  if(cafe.quantity > 0){
    cafe.quantity --;
  }
}

upQuantity(cafe : Cafe) : void{
  if(cafe.quantity < cafe.stock){
    cafe.quantity ++;
  }
}

changeQuantity(event: any, cafe:Cafe){
  console.log(event);
}

}

