import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/login/model/user.model';
import { UserService } from 'src/app/login/service/user.service';
import { Artikel } from '../models/artikel.model';
import { Reactie } from '../models/reactie.model';
import { ArtikelService } from '../services/artikel.service';
import { ReactieService } from '../services/reactie.service';
import { faUserCircle, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { LoginUser } from 'src/app/login/model/login-user.model';
import { UserLogin } from 'src/app/login/model/user-login.model';
import { UserLoginService } from 'src/app/login/service/user-login.service';
import { map } from 'rxjs/operators';
import { LikesService } from '../services/likes.service';
import { Likes } from '../models/likes.model';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

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
  clicked: any = false;
  admin: any;
  likes: Observable<Likes[]>;
  likesfromUser: Observable<Likes[]>;
  likescount: any;
  liked: any;
  likeToAdd: Likes = new Likes(null, null);
  UserLike: Likes;
  constructor(private route: ActivatedRoute, private _artikelService: ArtikelService, private _userService: UserService, private _reactionService: ReactieService, private _userLoginService: UserLoginService, private _likesService: LikesService) {this.getData();}

  getData(){
    this.route.paramMap.subscribe(params => {
      this.chosenId = params.get('id');
    });

    console.log("de id van het gekozen artikel", this.chosenId);

    this._artikelService.getArtikel(this.chosenId).subscribe((value) => {
      this.chosenArtikel = value;
      this.reactie.articleID = this.chosenArtikel.articleID;
      this.reacties = this._reactionService.getReacties().pipe(
        map(users => users.filter(
          (reac: Reactie) => reac.articleID == this.chosenArtikel.articleID
        ))
      );

      this._userLoginService.getUserLogins().subscribe((result) => {
        this.loggedInUser = result[0];
        this.reactie.userID = this.loggedInUser.userID;
      });


      this.likes = this._likesService.getLikes().pipe(
        map(value => value.filter(
          (Nlike: Likes) => Nlike.articleID == this.chosenArtikel.articleID
        ))
      );
      this.likes.subscribe((val) => { this.likescount = val.length; console.log("aantal likes", this.likescount) });


      this.likesfromUser = this._likesService.getLikes().pipe(
        map(value => value.filter(
          (l: Likes) => l.articleID == this.chosenArtikel.articleID && l.userID == this.loggedInUser.userID
        ))
      )
      this.likesfromUser.subscribe((val) => {
        if (val.length) {
          this.liked = true;
          this.UserLike = val[0]
          console.log("test", this.UserLike)
        }
        else {
          this.liked = false
        }
        console.log("value", val, this.liked)
      })
    });
  }

  faUserCircle = faUserCircle;
  faThumbsUp = faThumbsUp;
  faThumbsDown =faThumbsDown;
  ngOnInit(): void {}

  onSubmit() {
    this._reactionService.addReactie(this.reactie).subscribe()
    this.getData();
    this.reactie.body ="";
  }

  like() {
    console.log("userid", this.loggedInUser.userID, this.likeToAdd)
    this.likeToAdd.userID = this.loggedInUser.userID;
    this.likeToAdd.articleID = this.chosenArtikel.articleID;
    console.log("like", this.likeToAdd)
    this._likesService.addLike(this.likeToAdd).subscribe()
    this.liked = true;
    this.getData();
  }

  deleteLike(){
    this._likesService.deleteLike(this.UserLike.likesID).subscribe();
    this.getData();
    this.liked = false;
  }

}
