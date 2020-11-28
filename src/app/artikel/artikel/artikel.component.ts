import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/admin/model/tag.model';
import { Artikel } from '../models/artikel.model';
import { ArtikelService} from '../services/artikel.service';
import { map, filter } from 'rxjs/operators';
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
  chosenArtikel: Artikel = null;

  constructor(private _artikelService: ArtikelService, private route: ActivatedRoute, private router: Router) { 
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
          (artikel: Artikel) => artikel.tagID === this.tagfilterr.tagfilter && artikel.articleStatusID === 3
        ))
      );
    }
    
    
  }
  
  ngOnInit(): void {}

  showDetailArtikel(a: Artikel){
    this.chosenArtikel = a;
    this.router.navigate(['volledigArtikel', this.chosenArtikel.articleID])
  }


  

}
