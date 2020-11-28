import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/admin/model/tag.model';
import { TagService } from 'src/app/admin/service/tag.service';
import { Artikel } from 'src/app/artikel/models/artikel.model';
import { ArtikelService } from 'src/app/artikel/services/artikel.service';

@Component({
  selector: 'app-edit-artikel',
  templateUrl: './edit-artikel.component.html',
  styleUrls: ['./edit-artikel.component.scss']
})
export class EditArtikelComponent implements OnInit {

  artikel: Artikel;
  chosenId:any;
  tags: Observable<Tag[]>;
  constructor(private router: Router, private _artikelService: ArtikelService, private route: ActivatedRoute, private _tagService: TagService) {
    if(localStorage.getItem("role") != "Journalist"){
      this.router.navigate(['/'])
    }
    this.tags = this._tagService.getTags();
    this.route.paramMap.subscribe(params => {
      this.chosenId = params.get('id');
    });
    this._artikelService.getArtikel(this.chosenId).subscribe(r => this.artikel = r);
    

    console.log("gekozen id", this.chosenId);
   }



  ngOnInit(): void {
  }


  onSubmit(buttontype: string) {
    if(buttontype ==="save"){
      this._artikelService.updateArtikel(this.artikel.articleID, this.artikel).subscribe()
      this.router.navigate(['/journalist/index']);
    }

    if(buttontype ==="submit"){
      this.artikel.articleStatusID = 2;
      this._artikelService.updateArtikel(this.artikel.articleID, this.artikel).subscribe();
      this.router.navigate(['/journalist/index']);
    }
  }

}
