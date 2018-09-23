import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {


  items:any;

  editarItem: any = {
    name: '',

  authForm: FormGroup
  }

  constructor(private conexion:ConexionService, formBuilder: FormBuilder, private authService: AuthService, public snackBar: MatSnackBar, private router: Router) { 
    this.conexion.publicacionesItem().subscribe(item=>{
      this.items = item;
      console.log(this.items)
    });
    
    
  }

  ngOnInit() {
  }
  

  eliminar(item){
    this.conexion.eliminarItem(item);
  }

  editar(item){
    this.editarItem = item;
  }

  agregarItemEditado(){
    this.conexion.EditarItem(this.editarItem);
  }

  
}
