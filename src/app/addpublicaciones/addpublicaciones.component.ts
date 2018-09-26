import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addpublicaciones',
  templateUrl: './addpublicaciones.component.html',
  styleUrls: ['./addpublicaciones.component.css']
})
export class AddpublicacionesComponent implements OnInit {
  authForm: FormGroup; 
  item:any = {
    name:''
  }
  constructor(private servicio:ConexionService) { }

  ngOnInit() {
  }

  agregar(){
    this.servicio.addItem(this.item);
    this.item.name='';
  }
}