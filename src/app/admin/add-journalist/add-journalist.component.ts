import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/login/model/user.model';
import { UserService } from 'src/app/login/service/user.service';

@Component({
  selector: 'app-add-journalist',
  templateUrl: './add-journalist.component.html',
  styleUrls: ['./add-journalist.component.scss']
})
export class AddJournalistComponent implements OnInit {


  user: User = new User("", "", "", "", "", "", 2);
  constructor(private router: Router, private _userService: UserService) {
    if(localStorage.getItem("role") != "Admin"){
      this.router.navigate(['/'])
    }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this._userService.addUser(this.user).subscribe()
    this.router.navigate(['/admin/journalist'])
  }
}
