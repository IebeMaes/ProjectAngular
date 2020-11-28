import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/login/model/user.model';
import { UserService } from 'src/app/login/service/user.service';
import { Artikel } from '../models/artikel.model';
import { Reactie } from '../models/reactie.model';
import { ArtikelService } from '../services/artikel.service';
import { ReactieService } from '../services/reactie.service';
import { faUserCircle, faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { LoginUser } from 'src/app/login/model/login-user.model';
import { UserLogin } from 'src/app/login/model/user-login.model';
import { UserLoginService } from 'src/app/login/service/user-login.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-artikel-detail',
  templateUrl: './artikel-detail.component.html',
  styleUrls: ['./artikel-detail.component.scss']
})
export class ArtikelDetailComponent implements OnInit {


  chosenId: any;
  chosenArtikel: Artikel;
  author: User;
  reacties: Observable<Reactie[]>;
  reactie: Reactie = new Reactie("", 0, 0)
  loggedInUser: LoginUser;
  clicked:any = false;

  constructor(private route: ActivatedRoute, private _artikelService: ArtikelService, private _userService: UserService, private _reactionService: ReactieService, private _userLoginService: UserLoginService) {
    this.route.paramMap.subscribe(params => {
      this.chosenId = params.get('id');
    });
    console.log("de id van het gekozen artikel", this.chosenId);

    this._artikelService.getArtikel(this.chosenId).subscribe((value) => {
      this.chosenArtikel = value;
      this.reactie.articleID = this.chosenArtikel.articleID;
      this.reacties = _reactionService.getReacties().pipe(
        map(users => users.filter(
          (reac: Reactie) => reac.articleID == this.chosenArtikel.articleID
        ))
      );
    });

    this._userLoginService.getUserLogins().subscribe((result) => {
      this.loggedInUser = result[0];
      this.reactie.userID = this.loggedInUser.userID;
    })
    
  }

  faUserCircle = faUserCircle;
  faThumbsUp = faThumbsUp;

  ngOnInit(): void {

  }
  onSubmit() {
    this._reactionService.addReactie(this.reactie).subscribe()
    location.reload();
  }

  like(){
    this.chosenArtikel.likes = this.chosenArtikel.likes + 1;
    this._artikelService.updateArtikel(this.chosenArtikel.articleID, this.chosenArtikel).subscribe()
    this.clicked=true;
    
  }

}
