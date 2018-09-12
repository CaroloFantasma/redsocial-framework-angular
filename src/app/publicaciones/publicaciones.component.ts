import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  items:any;

  constructor(private conexion:ConexionService) { 
    this.conexion.publicacionesItem().subscribe(item=>{
      this.items = item;
      console.log(this.items)
    });
  }

  ngOnInit() {
  }

}
