import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import {UserService} from '../service/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User = new User("", "", "", "", "", "", 1);
  constructor(private router:Router, private _userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._userService.addUser(this.user).subscribe();
    this.router.navigate(['/login']);
  }
}
