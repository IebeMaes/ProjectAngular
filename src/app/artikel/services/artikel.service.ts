import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artikel } from '../models/artikel.model';

@Injectable({
  providedIn: 'root'
})
export class ArtikelService {

  constructor(private http: HttpClient) { }

  getArtikels(): Observable<Artikel[]>{
    return this.http.get<Artikel[]>("https://localhost:44348/api/article");
  }

  getArtikel(id: number): Observable<Artikel>{
    return this.http.get<Artikel>("https://localhost:44348/api/article/" + id);
  }

  updateArtikel(id: number, artikel: Artikel){
    return this.http.put<Artikel>("https://localhost:44348/api/article/" + id, artikel, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  addArtikel(artikel: Artikel){
    return this.http.post<Artikel>("https://localhost:44348/api/article" , artikel , {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
  }

  deleteArtikel(artikelID: number){
    return this.http.delete<Artikel>("https://localhost:44348/api/article/" + artikelID, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    })
  }
}
