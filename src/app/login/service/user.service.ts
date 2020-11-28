import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    return this.http.post<User>("https://localhost:44348/api/user", user);
  }

  getUsers(): Observable<User[]> {
    var token = localStorage.getItem("token");
    console.log("token van de api", token);
    return this.http.get<User[]>("https://localhost:44348/api/user", {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  
  }

  deleteUser(userID: number){
    return this.http.delete<User>("https://localhost:44348/api/user/" + userID,  {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  getUser(id: number): Observable<User>{
    return this.http.get<User>("https://localhost:44348/api/user/" + id, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }
}