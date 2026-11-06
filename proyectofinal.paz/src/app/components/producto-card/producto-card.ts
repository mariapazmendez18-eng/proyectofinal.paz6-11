import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Productoss } from '../../models/interface/interface';
 


@Component({
  imports: [],
  selector: 'app-producto-card',
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {
  @Input() productos!: Productoss;
  @Output() agregarAlCarrito = new EventEmitter<Productoss>();
  
  onAgregar(){
    alert("TU COMPRA TUVO EXITOS, SE AGREGO AL CARRITO||",)
    this.agregarAlCarrito.emit(this.productos);
  }
}
