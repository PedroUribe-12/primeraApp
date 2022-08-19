import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro'

@Component({
  selector: 'app-i-biblioteca',
  templateUrl: './i-biblioteca.page.html',
  styleUrls: ['./i-biblioteca.page.scss'],
})
export class IBibliotecaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  libros:Libro[] = [
    {
      nombre: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      anio: 1966,
      precio: 2000,
      imagen:'../../../assets/libros/cienAñosDeSoledad.jpg'
    },
    {
      nombre:'Orgullo y prejuicio',
      autor:'Jane Austen',
      anio: 1813,
      precio: 2000,
      imagen:'../../../assets/libros/orgullo-y-prejuicio.webp'
    },
    {
      nombre:'Guerra y paz',
      autor:'León Tolstói',
      anio: 1864,
      precio: 5000,
      imagen:'../../../assets/libros/guerraYPAZ.jpg'
    },
    {
      nombre:'Cumbres borrascosas',
      autor:'Emily Brontë',
      anio: 1847,
      precio: 3000,
      imagen:'../../../assets/libros/cumbresBorroscosas.jpg'
    }
  ]

}
