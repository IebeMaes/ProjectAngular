import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Artikel } from 'src/app/artikel/models/artikel.model';
import { ArtikelService } from 'src/app/artikel/services/artikel.service';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-admin-artikel',
  templateUrl: './admin-artikel.component.html',
  styleUrls: ['./admin-artikel.component.scss']
})
export class AdminArtikelComponent implements OnInit {

  sub: any;
  tagfilterr: any
  artikels: Observable<Artikel[]>;

  chosenArtikel: Artikel = null;

  constructor(private _artikelService: ArtikelService, private route: ActivatedRoute, private router: Router) { 
    if(localStorage.getItem("role") != "Admin"){
      this.router.navigate(['/'])
    }
      this.artikels = this._artikelService.getArtikels().pipe(
        map(artikels => artikels.filter(
          (artikel: Artikel) => artikel.articleStatusID === 2
        ))
      );
      this.artikels.subscribe(r => console.log(r))
    
    
  }
  
  ngOnInit(): void {}

  showDetailArtikel(a: Artikel){
    this.chosenArtikel = a;
    this.router.navigate(['/admin/artikel/', this.chosenArtikel.articleID])
  }

  clickMethod(name: string) {
    if(confirm("Are you sure to delete "+name)) {
      console.log("Implement delete functionality here");
    }
  }
}
