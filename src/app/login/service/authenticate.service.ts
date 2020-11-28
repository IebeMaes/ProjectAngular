import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UserLogin } from '../model/user-login.model';
import { User } from '../model/user.model';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private _httpClient: HttpClient, private router: Router) { }

  authenticate(userLogin: UserLogin): Observable<User> {
    return this._httpClient.post<User>("https://localhost:44348/api/User/authenticate", userLogin).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.router.navigate(['/login']);
          window.alert("Geen toegang")
        }
        if (err.status === 400) {
          this.router.navigate(['/login']);
          window.alert("gebruikersnaam of wachtwoord is fout")
        }
        return throwError("unauthorized");
      })
  );

}
}

