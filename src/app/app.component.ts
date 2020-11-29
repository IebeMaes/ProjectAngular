import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tag } from './admin/model/tag.model';
import { TagService } from './admin/service/tag.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { UserLoginService } from './login/service/user-login.service'
import { User } from './login/model/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ProjectKrant';
  token: string;
  role: String;
  tags: Observable<Tag[]>;
  id: number;
  constructor(private router: Router, private _tagService: TagService, private _loginUserService: UserLoginService) {
    this.getData();
    //console.log("tags", this.tags)

  }

  getData() {
    this.tags = this._tagService.getTags();
  }
  ngOnInit(): void {
    this.getData();
    this.token = localStorage.getItem("token");
    this.role = localStorage.getItem("role");
    //localStorage.clear();

  }

  logout() {
    localStorage.clear();
    this._loginUserService.getUserLogins().subscribe((result) => {
      this.id = result[0].loginUserID;
      console.log(this.id);
      this._loginUserService.deleteUserLogin(this.id).subscribe();
      this.ngOnInit();
      this.router.navigate(["/"])
    }
    )


  }

  faCoffee = faCoffee;
}
