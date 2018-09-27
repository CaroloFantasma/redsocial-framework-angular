import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

interface User {
  uid: string;
  email: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;
 
  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  loginGoogle() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('email');
      this.firebaseAuth.auth
        .signInWithPopup(provider)
        .then(response => {
          resolve(response)
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }
  loginFacebook() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      this.firebaseAuth.auth
        .signInWithPopup(provider)
        .then(response => {
          resolve(response);
        }, err => {
          console.log(err);
          reject(err);
        })
    })
  }

  signup(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.firebaseAuth.auth.signOut()
  }
}
