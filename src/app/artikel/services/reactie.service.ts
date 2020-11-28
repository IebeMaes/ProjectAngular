import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reactie } from '../models/reactie.model';

@Injectable({
  providedIn: 'root'
})
export class ReactieService {

  constructor(private http: HttpClient) { }

  getReacties(): Observable<Reactie[]>{
    return this.http.get<Reactie[]>("https://localhost:44348/api/reactions");
  }

  addReactie(reactie: Reactie){
    return this.http.post<Reactie>("https://localhost:44348/api/reactions" , reactie);
  }


}
