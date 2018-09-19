import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireStorage } from 'angularfire2/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(db: AngularFirestore, private router: Router, formBuilder: FormBuilder, private authService: AuthService, public snackBar: MatSnackBar, private storage: AngularFireStorage) {
    this.items = db.collection('items').valueChanges();
  }

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  goToPerfil() {
    this.router.navigate(['/perfil']);
  }

  goToHome() {
    this.router.navigate(['/muro']);
  }

  goToSalud() {
    this.router.navigate(['/salud']);
  }

  goToAlimentacion() {
    this.router.navigate(['/alimentacion']);
  }

  goToNoticias() {
    this.router.navigate(['/noticias']);
  }

  goToPreguntas() {
    this.router.navigate(['/preguntas']);
  }

  goToActividades() {
    this.router.navigate(['/actividades']);
  }

}



