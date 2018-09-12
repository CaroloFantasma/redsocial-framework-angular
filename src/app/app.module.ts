import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ConexionService } from './services/conexion.service';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { AddpublicacionesComponent } from './addpublicaciones/addpublicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicacionesComponent,
    AddpublicacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
