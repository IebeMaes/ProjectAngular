import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Role} from '../model/role.model';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getRole(roleID : number){
    return this.http.get<Role>("https://localhost:44348/api/role/" + roleID);
  }
}
