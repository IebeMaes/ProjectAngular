import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Tag} from './admin/model/tag.model';
import {TagService} from './admin/service/tag.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {UserLoginService} from './login/service/user-login.service'
import { User } from './login/model/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ProjectKrant';
  token: string = localStorage.getItem("token");
  role: String = localStorage.getItem("role");
  tags: Observable<Tag[]>;
  id: number;
  constructor(private router: Router, private _tagService: TagService, private _loginUserService: UserLoginService) {
    this.tags = this._tagService.getTags();
    //console.log("tags", this.tags)
  }


  ngOnInit(): void {
    //localStorage.clear();

  }

  logout() {
    localStorage.clear();
    this._loginUserService.getUserLogins().subscribe((result) => {
      this.id= result[0].loginUserID;  
      console.log(this.id); 
      this._loginUserService.deleteUserLogin(this.id).subscribe();location.reload();} )
    
    
  }
  faCoffee = faCoffee;
}
