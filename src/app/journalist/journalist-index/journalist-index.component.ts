import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Artikel } from 'src/app/artikel/models/artikel.model';
import { ArtikelService } from 'src/app/artikel/services/artikel.service';
import { map, filter } from 'rxjs/operators';
import { User } from 'src/app/login/model/user.model';
import { LoginUser } from 'src/app/login/model/login-user.model';
import { UserLoginService } from '../../login/service/user-login.service';
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-journalist-index',
  templateUrl: './journalist-index.component.html',
  styleUrls: ['./journalist-index.component.scss']
})
export class JournalistIndexComponent implements OnInit {
  sub: any;
  refresh: any;
  artikels: Observable<Artikel[]>;
  author: LoginUser;
  constructor(private _artikelService: ArtikelService, private route: ActivatedRoute, private router: Router, private _loginUserService: UserLoginService) {
    if (localStorage.getItem("role") != "Journalist") {
      this.router.navigate(['/'])
    }
    
    this.sub = this.route.queryParams.subscribe(params => {this.refresh = params['refresh']; console.log("test route", this.refresh)})
    this.getData();

    if(this.refresh){
      this.getData();
    }
  }


  getData() {
    this._loginUserService.getUserLogins().subscribe((result) => {
      this.author = result[0];
      console.log(this.author);
      this.artikels = this._artikelService.getArtikels().pipe(
        map(artikels => artikels.filter(
          (artikel: Artikel) => artikel.articleStatusID === 1 && artikel.userID === this.author.userID
        ))
      );
      this.artikels.subscribe(r => console.log(r))
    })
  }

  ngOnInit(): void {
    this.getData();
  }

  goToevoegen() {
    this.router.navigate(['/journalist/artikel']);
  }
  goEdit(id) {
    this.router.navigate(['/journalist/artikel/' + id])
  }
  Delete(id) {
    this._artikelService.deleteArtikel(id).subscribe(val => this.getData())
    
  }

  faArrowDown = faArrowDown;

}
