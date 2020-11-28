import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tag } from '../model/tag.model';
import { TagService } from '../service/tag.service';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  tags: Observable<Tag[]>
  tag: Tag = new Tag("");
  constructor(private _tagService: TagService, private router: Router) { 
    if (localStorage.getItem("role") != "Admin") {
      this.router.navigate(['/'])
    }

    this.tags = this._tagService.getTags();
    this.tags.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this._tagService.addTag(this.tag).subscribe();
    location.reload();
  }

  reload(){
    location.reload();
  }

  deleteTag(tagId){
    this._tagService.deleteTag(tagId).subscribe(result => location.reload(), error => alert("Kan geen tags verwijderen waarvoor er artikels geschreven zijn"));

  }

  faSyncAlt = faSyncAlt;
}
