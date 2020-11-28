import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Artikel } from 'src/app/artikel/models/artikel.model';
import { ArtikelService } from 'src/app/artikel/services/artikel.service';
import { map, filter } from 'rxjs/operators';
import { User } from 'src/app/login/model/user.model';
import { LoginUser } from 'src/app/login/model/login-user.model';
import {UserLoginService} from '../../login/service/user-login.service'
@Component({
  selector: 'app-journalist-index',
  templateUrl: './journalist-index.component.html',
  styleUrls: ['./journalist-index.component.scss']
})
export class JournalistIndexComponent implements OnInit {
  artikels: Observable<Artikel[]>;
  author: LoginUser;
  constructor(private _artikelService: ArtikelService, private route: ActivatedRoute, private router: Router, private _loginUserService: UserLoginService) { 
    if(localStorage.getItem("role") != "Journalist"){
      this.router.navigate(['/'])
    }
    
    
    this._loginUserService.getUserLogins().subscribe((result) => {
      this.author= result[0];  
      console.log(this.author); 
      this.artikels = this._artikelService.getArtikels().pipe(
        map(artikels => artikels.filter(
          (artikel: Artikel) => artikel.articleStatusID === 1 && artikel.userID === this.author.userID
        ))
      );
      this.artikels.subscribe(r => console.log(r))
     } )

     
}

  ngOnInit(): void {
  }

  goToevoegen(){
    this.router.navigate(['/journalist/artikel']);
  }
  goEdit(id){
    this.router.navigate(['/journalist/artikel/' + id])
  }
  Delete(id){
    this._artikelService.deleteArtikel(id).subscribe()
    this.router.navigate([this.router.url])
    //location.reload();
  }

}
