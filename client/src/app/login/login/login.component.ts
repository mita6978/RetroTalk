import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.userProfile$.subscribe((user) => console.log(user));
  }


  signInWithFB(): void {
    this.auth.login();
  }

}
