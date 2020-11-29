import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Likes } from '../models/likes.model';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor(private http: HttpClient) { }

  getLikes(): Observable<Likes[]>{
    return this.http.get<Likes[]>("https://localhost:44348/api/likes");
  }

  addLike(like: Likes){
    return this.http.post<Likes>("https://localhost:44348/api/likes" , like);
  }

  deleteLike(likesID: number){
    return this.http.delete<Likes>("https://localhost:44348/api/likes/" + likesID)
  }

}
