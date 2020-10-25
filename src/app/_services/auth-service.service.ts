import { Injectable } from '@angular/core';
import { UserRegistration } from './../_models/user-registration';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
userForRegistration: UserRegistration;
token: string;

constructor(private http: HttpClient) { }

registerUser(user: UserRegistration) {
  return this.http.post(environment.baseUrl + 'api/auth/registration', user);
}

login(loginModel) {
  return this.http.get(environment.baseUrl + 'api/auth/login?email=' + loginModel.email + '&password=' + loginModel.password);
}

getToken() {
  this.token = localStorage.getItem('token');
}

checkUniqueEmail(email: string){
    return this.http.get(environment.baseUrl + 'api/auth/emailValidation?email=' + email);
}

}
