import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { async } from 'rxjs/internal/scheduler/async';
import { Artikel } from 'src/app/artikel/models/artikel.model';
import { ArtikelService } from 'src/app/artikel/services/artikel.service';
import { User } from 'src/app/login/model/user.model';
import { UserService } from 'src/app/login/service/user.service';

@Component({
  selector: 'app-admin-artikel-detail',
  templateUrl: './admin-artikel-detail.component.html',
  styleUrls: ['./admin-artikel-detail.component.scss']
})
export class AdminArtikelDetailComponent implements OnInit {
  sub: any;
  chosenId: any;
  chosenArtikel: Artikel;
  author: User;
  archive: any;

  constructor(private route: ActivatedRoute, private _artikelService: ArtikelService, private _userService: UserService, private router: Router) {
    if(localStorage.getItem("role") != "Admin"){
      this.router.navigate(['/'])
    }
    this.route.paramMap.subscribe(params => {
      this.chosenId = params.get('id');
    });
    console.log("de id van het gekozen artikel", this.chosenId);

    this.sub = this.route
      .data
      .subscribe(v => this.archive = v.archief);
    //this.chosenArtikel = this._artikelService.getArtikel(this.chosenId);

    this._artikelService.getArtikel(this.chosenId).subscribe(
      (value) => {this.chosenArtikel = value; 
        console.log(this.chosenArtikel); 
        this._userService.getUser(this.chosenArtikel.userID).subscribe((a) => {this.author = a; console.log('EN DU USER ISSS', this.author)
        }); 
        
      });
    
  
  }

  ngOnInit(): void {
    
  }

  publiceer(gekozenArtikel: Artikel) {
    gekozenArtikel.articleStatusID = 3;
    console.log("update van het artikel", gekozenArtikel);
    this._artikelService.updateArtikel(gekozenArtikel.articleID, gekozenArtikel).subscribe();
    this.router.navigate(['/admin/artikel'])
  }

  plaatsTerug(a: Artikel){
    a.archive = false;
    this._artikelService.updateArtikel(a.articleID, a).subscribe();
    this.router.navigate(["/admin/archief"])

  }


}
