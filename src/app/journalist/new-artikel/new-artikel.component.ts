import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/admin/model/tag.model';
import { TagService } from 'src/app/admin/service/tag.service';
import { Artikel } from 'src/app/artikel/models/artikel.model';
import { ArtikelService } from 'src/app/artikel/services/artikel.service';
import { LoginUser } from 'src/app/login/model/login-user.model';
import { UserLogin } from 'src/app/login/model/user-login.model';
import { UserLoginService } from 'src/app/login/service/user-login.service';

@Component({
  selector: 'app-new-artikel',
  templateUrl: './new-artikel.component.html',
  styleUrls: ['./new-artikel.component.scss']
})
export class NewArtikelComponent implements OnInit {
  artikel: Artikel = new Artikel("", "", "", "", 1, null, 1, "", 0, false);
  author: LoginUser;
  tags: Observable<Tag[]>;
  constructor(private _loginUserService: UserLoginService, private router: Router ,private _tagService: TagService, private _artikelService: ArtikelService) {
    if(localStorage.getItem("role") != "Journalist"){
      this.router.navigate(['/'])
    }
    this._loginUserService.getUserLogins().subscribe((result) => {
      this.author = result[0];
      this.artikel.userID = this.author.userID;
      console.log(this.artikel)
      console.log(this.author);
    })
    this.tags = this._tagService.getTags()

  }



  ngOnInit(): void {
  }

  onSubmit(buttontype: string) {
    if(buttontype ==="save"){
      this._artikelService.addArtikel(this.artikel).subscribe()
      this.router.navigate(['/journalist/index']);
    }

    if(buttontype ==="submit"){
      this.artikel.articleStatusID = 2;
      this._artikelService.addArtikel(this.artikel).subscribe();
      this.router.navigate(['/journalist/index']);
    }
  }

}
