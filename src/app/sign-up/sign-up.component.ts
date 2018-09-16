import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(public authService: AuthService) {
   }

  ngOnInit() {
  }

  OnSubmitAddUser() {
    this.authService.signup(this.email, this.password)
    .then( (res) => {
      console.log('bien!');
      console.log(res);
    }).catch( (err) => {
    
    });
  }

}
