import { Component, OnInit } from '@angular/core';
import { AccountLogin } from 'src/app/models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  account: AccountLogin = {
    username: '',
    password: '',
  };
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.account);
  }
}
