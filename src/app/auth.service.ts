import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Firebase } from "firebase/auth";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public firebaseAuth: AngularFireAuth) { 
  }

  registerUser(email: string, password: string) {
    return new Promise ((resolve, reject) => {
      this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject (err))
    });
  }

  loginEmail(email: string, password: string) {
    return new Promise ((resolve, reject) => {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject (err))
    });
  }
  
  getAuth() {
    return this.firebaseAuth.authState.pipe(map (auth => auth));
  }

  logout () {
    return this.firebaseAuth.auth.signOut();
  }
}
