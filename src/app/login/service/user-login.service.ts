import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '../model/login-user.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }

  addUserLogin(user: LoginUser) {
    return this.http.post<LoginUser>("https://localhost:44348/api/loginusers", user);
  }

  getUserLogins(): Observable<LoginUser[]> {
    var token = localStorage.getItem("token");
    console.log("token van de api", token);
    return this.http.get<LoginUser[]>("https://localhost:44348/api/loginusers");
  
  }

  deleteUserLogin(id: number){
    return this.http.delete<LoginUser>("https://localhost:44348/api/loginusers/" + id);
  }

  getUserLogin(id: number): Observable<LoginUser>{
    return this.http.get<LoginUser>("https://localhost:44348/api/loginusers/" + id);
  }
}
