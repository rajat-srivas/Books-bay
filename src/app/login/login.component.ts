import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../_models/user-registration';
import { AuthServiceService } from './../_services/auth-service.service';
import {ValidateEqualDirective} from './../_helpers/ValidateEqual.directive';

@Component({
  selector: 'app-login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin = false;
  loginSuccess = true;
  newUser = {} as UserRegistration;
  isValidEnail = true;
  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }
  changeUserLoginStatus() {
    this.isLogin = !this.isLogin;
  }

  registerUser() {
    console.log(this.newUser);
    this.authService.registerUser(this.newUser).subscribe(() => {
      console.log('success');
      this.newUser = {} as UserRegistration;
      this.changeUserLoginStatus();
    },
    (error) => {
      console.log(error);
    });
  }

  login() {
    const loginModel = {
      email: this.newUser.email,
      password: this.newUser.password
    };
    console.log(loginModel);
    this.authService.login(loginModel).subscribe((response) => {
        console.log(response);
        localStorage.setItem('token', response.toString());
        this.loginSuccess = true;
    },
    (error) => {
      console.log(error);
      this.loginSuccess = false;
    });
  }

  checkUniqueEmail() {
    if (this.newUser.email === null)
    {
      return true;
    }
    this.authService.checkUniqueEmail(this.newUser.email).subscribe((response) => {
      this.isValidEnail = response as boolean;
    },
    (error) => {
      console.log(error);
    });
  }

}
