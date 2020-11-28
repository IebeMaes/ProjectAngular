import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/login/model/user.model';
import { UserService } from 'src/app/login/service/user.service';
import { FormControl } from '@angular/forms';
import { map, filter } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { Router } from '@angular/router';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-journalist',
  templateUrl: './journalist.component.html',
  styleUrls: ['./journalist.component.scss']
})
export class JournalistComponent implements OnInit {

  users: Observable<User[]>;
  journalist;
  constructor(private _userService: UserService, private router: Router) {
    if (localStorage.getItem("role") != "Admin") {
      this.router.navigate(['/'])
    }

    this.users = this._userService.getUsers();

    this.journalist = this.users.pipe(
      map(users => users.filter(
        (user: User) => user.roleID == 2
      ))
    );
  }

  goToevoegen(){
    this.router.navigate(['/admin/addJournalist']);
  }

  ngOnInit(): void {
  }
  
  deleteUser(userID){
    this._userService.deleteUser(userID).subscribe()
    location.reload();
  }

  reload(){
    location.reload();
  }
  faSyncAlt = faSyncAlt;
}