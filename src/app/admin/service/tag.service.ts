import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../model/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>("https://localhost:44348/api/tag");
  }

  getTag(tagID : number){
    return this.http.get<Tag>("https://localhost:44348/api/tag/" + tagID);
  }

  deleteTag(tagID: number){
    return this.http.delete<Tag>("https://localhost:44348/api/tag/" + tagID, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    }
);
  }

  addTag(tag: Tag) {
    return this.http.post<Tag>("https://localhost:44348/api/tag", tag, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    }
);
  }
}
