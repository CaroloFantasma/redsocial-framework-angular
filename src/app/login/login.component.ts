import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;

  //Solicitamos en el constructor todas las cosas necesarias 
  constructor(private formBuilder: FormBuilder, private authService: AuthService, public snackBar: MatSnackBar, private router: Router) {
    this.createAuthForm();
  }

  ngOnInit() {
  }

  createAuthForm() {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  onRegister() {
    this.authService.signup(this.authForm.value.email, this.authForm.value.password)
      .then(() => {
      })
      .catch(() => {
        this.snackBar.open('Error de registro, trata otra vez'
          , null
          , {
            duration: 3000
          });
      });
  }

  onLogin() {
    this.authService.login(this.authForm.value.email, this.authForm.value.password)
      .then(() => {
      })
      .catch(() => {
        this.snackBar.open('Error al tratar de iniciar sesión, trata otra vez'
          , null
          , {
            duration: 3000
          });
      });
  }

  loginGoogle(){
    this.authService.loginGoogle()
    .then(response => {
      this.router.navigate(['/wall']);
    })
  }

  loginFb(){
   this.authService.loginFacebook()
   .then(response => {
     this.router.navigate(['/wall']);
   })
 }

  onLogout() {
    this.authService.logout()
      .then(() => {
      })
      .catch(() => {
        this.snackBar.open('Error al tratar de cerrar sesión, trata otra vez'
          , null
          , {
            duration: 3000
          });
      });
  }
}