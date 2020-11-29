import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/admin/model/tag.model';
import { Artikel } from '../models/artikel.model';
import { ArtikelService} from '../services/artikel.service';
import { map, filter } from 'rxjs/operators';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { UserLoginService } from 'src/app/login/service/user-login.service';
@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.scss']
})
export class ArtikelComponent implements OnInit{
  sub: any;
  tagfilterr: any
  artikels: Observable<Artikel[]>;
  tags: Observable<Tag[]>;
  searchText;
  p;
  admin: any;
  loggedInUser: any;
  chosenArtikel: Artikel = null;

  constructor(private _artikelService: ArtikelService, private route: ActivatedRoute, private router: Router, private _userLoginService: UserLoginService) { 
    this.sub = this.route
      .data
      .subscribe(v => this.tagfilterr = v);
    console.log("test van de tagfilter", this.tagfilterr.tagfilter)
    if(this.tagfilterr.tagfilter == ""){
      this.artikels = this._artikelService.getArtikels().pipe(
        map(artikels => artikels.filter(
          (artikel: Artikel) => artikel.articleStatusID ===3
        ))
      );
      this.artikels.subscribe(r => console.log(r))
    }
    else{
      this.artikels = this._artikelService.getArtikels().pipe(
        map(artikels => artikels.filter(
          (artikel: Artikel) => artikel.tagID === this.tagfilterr.tagfilter && artikel.articleStatusID === 3 && artikel.archive == false
        ))
      );
    }
    this._userLoginService.getUserLogins().subscribe((result) => {
      this.loggedInUser = result[0];
      if(this.loggedInUser.roleID ==3){
        this.admin = true;
      }
    })
    
    
  }
  
  ngOnInit(): void {}

  showDetailArtikel(a: Artikel){
    this.chosenArtikel = a;
    this.router.navigate(['volledigArtikel', this.chosenArtikel.articleID])
  }


  archiveArtikel(artikel: Artikel){
    artikel.archive = true;
    this._artikelService.updateArtikel(artikel.articleID, artikel).subscribe(result => this.router.navigate([""]))
  }

  faArchive = faArchive;

}
