import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../model/user-login.model';
import {AuthenticateService} from '../service/authenticate.service';
import { Router } from '@angular/router';
import {RoleService} from '../service/role.service';
import {UserLoginService} from '../service/user-login.service';
import { LoginUser } from '../model/login-user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin("", "");
  
  constructor(private _authenticateService: AuthenticateService, private router:Router, private _roleService: RoleService, private _loginUserService: UserLoginService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    this._authenticateService.authenticate(this.userLogin).subscribe(result => {
      localStorage.setItem("token", result.token);
      var role = result.role.name;
      localStorage.setItem("role", role);
      console.log("result", result);
      let loginUser = new LoginUser(result.email, result.username,result.token, result.roleID, result.userID);
      this._loginUserService.addUserLogin(loginUser).subscribe()

      if(role == "User"){
        this.router.navigate(['/'])
      }
      if(role == "Journalist"){
        this.router.navigate(['/journalist/index'])
      }
      if(role == "Admin"){
        this.router.navigate(['/admin'])
      }
      
      
    });

  }

  goSignup(){
    this.router.navigate(['/signUp']);
  }
}
