import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tag } from '../model/tag.model';
import { TagService } from '../service/tag.service';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { ArtikelService } from 'src/app/artikel/services/artikel.service';
import { Artikel } from 'src/app/artikel/models/artikel.model';
import { map } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  tags: Observable<Tag[]>
  tag: Tag = new Tag("");
  artikels: Observable<Artikel[]>
  artikelsMetTag: Observable<Artikel[]>;
  lengte: any;
  constructor(private _tagService: TagService, private router: Router, private _articleService: ArtikelService, private appComponent: AppComponent) { 
    if (localStorage.getItem("role") != "Admin") {
      this.router.navigate(['/'])
    }

    this.getData();
    
  }

  getData(){
    this.tags = this._tagService.getTags();
    this.tags.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this._tagService.addTag(this.tag).subscribe(value => {this.getData(); this.appComponent.ngOnInit()});
    this.tag.name="";
    
  }

  deleteTag(tagId){
    this.artikels = this._articleService.getArtikels();
    this.artikelsMetTag = this.artikels.pipe(
      map(users => users.filter(
        (artikel: Artikel) => artikel.tagID == tagId
      ))
    );
    this.artikelsMetTag.subscribe((val) => {
      this.lengte = val.length;
      console.log(this.lengte)
      if(this.lengte > 0){
        alert("Kan geen tags verwijderen waarvoor er artikels geschreven zijn")
      }
      else {
        this._tagService.deleteTag(tagId).subscribe(result =>{ this.getData(); this.appComponent.ngOnInit()})
      }
    })
    
    //this._tagService.deleteTag(tagId).subscribe(result => this.getData(), error => alert("Kan geen tags verwijderen waarvoor er artikels geschreven zijn"));

  }

  faSyncAlt = faSyncAlt;
}
