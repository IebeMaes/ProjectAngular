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
  archive: any;
  chosenArtikel: Artikel = null;
  title: String;
  refresh: any;
  constructor(private _artikelService: ArtikelService, private route: ActivatedRoute, private router: Router) { 
    if(localStorage.getItem("role") != "Admin"){
      this.router.navigate(['/'])
    }
      
      this.sub = this.route
      .data
      .subscribe(v => this.archive = v.archief);
      console.log("test van de tagfilter", this.archive)
      
      this.sub = this.route.queryParams.subscribe(params => {this.refresh = params['refresh']; console.log("test route", this.refresh)})

      if(this.refresh){
        this.getData();
      }
      if(this.archive == false){
        this.getData();
        this.title = "Overzicht van de artikels die nog gepubliceerd moeten worden"
      }
      if(this.archive == true){
        this.getDataArchive();
        this.title = "Overzicht van de artikels in het archief"
      }
    
  }
  getData(){
    this.artikels = this._artikelService.getArtikels().pipe(
      map(artikels => artikels.filter(
        (artikel: Artikel) => artikel.articleStatusID === 2
      ))
    );
    this.artikels.subscribe(r => console.log(r))
  }

  getDataArchive(){
    this.artikels = this._artikelService.getArtikels().pipe(
      map(artikels => artikels.filter(
        (artikel: Artikel) => artikel.articleStatusID === 3 && artikel.archive == true
      ))
    );
    this.artikels.subscribe(r => console.log(r))
  }
  
  ngOnInit(): void {}

  showDetailArtikel(a: Artikel){
    this.chosenArtikel = a;
    this.router.navigate(['/admin/artikel/', this.chosenArtikel.articleID])
  }

  showDetailArtikelArchief(a: Artikel){
    this.chosenArtikel = a;
    this.router.navigate(["/admin/archief/", this.chosenArtikel.articleID])
  }

  clickMethod(name: string, id: number) {
    if(confirm("Bent u zeker dat u hetvolgende artikel wilt verwijderen?\nTitel: "+name)) {
      this._artikelService.deleteArtikel(id).subscribe(result => this.getData())
      
    }
  }
}
