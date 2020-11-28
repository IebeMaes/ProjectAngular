import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee, faUser, faUserCog, faNewspaper, faTags } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("role") != "Admin"){
      this.router.navigate(['/'])
    }
    
  }

  routeJournalist(){
    this.router.navigate(["/admin/journalist"])
  }
  routeArtikels(){
    this.router.navigate(["/admin/artikel"])
  }
  routeTags(){
    this.router.navigate(["/admin/tags"])
  }
  faCoffee = faCoffee;
  faUser = faUser;
  faUserCog = faUserCog;
  faNewspaper = faNewspaper;
  faTags = faTags;
}
