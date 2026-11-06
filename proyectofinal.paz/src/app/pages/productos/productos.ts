import { Component } from '@angular/core';
import { ProductoCard } from '../../components/producto-card/producto-card';
import { Productoss } from '../../models/interface/interface';

@Component({
  imports: [ProductoCard],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})

export class Productos {

productos: Productoss[] = [
    {
      id: 1,
      nombre: 'Vaso Térmico',
      precio: 18.000,
      imagen: 'vas.png',
      descripcion:'Ideal para disfrutar tus bebidas favoritas en cualquier momento.'
    },
    {
      id: 2,
      nombre: 'Mochila',
      precio: 32.000,
      imagen: 'mochilagrande.png',
      descripcion:''
    },
    {
      id: 3,
      nombre: 'Peluche',
      precio: 20.000,
      imagen: 'peluche.png',
      descripcion:''
    },
    {
      id: 4,
      nombre: 'Set accesorios pelo',
      precio: 10.000,
      imagen: 'pelo.png',
      descripcion:''
    },
    {
      id: 5,
      nombre: 'Set de aros y cadenita',
      precio: 9.500,
      imagen: 'aros.png',
      descripcion:''
    },
    {
      id: 6,
      nombre: 'Carrterita',
      precio: 22.000,
      imagen: 'bolsito.png.webp',
      descripcion:''
    }
  ];

onAgregar(articulo:Productoss){
  alert(articulo.nombre + "TU COMPRA TUVO EXITOS, SE AGREGO AL CARRITO")
}

  
}
