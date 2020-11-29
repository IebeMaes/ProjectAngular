import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ArtikelModule } from './artikel/artikel.module';
import { ArtikelComponent } from './artikel/artikel/artikel.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import {AdminComponent} from './admin/admin.component';
import {JournalistComponent} from './admin/journalist/journalist.component';
import { AddJournalistComponent } from './admin/add-journalist/add-journalist.component';
import { TagComponent } from './admin/tag/tag.component';
import { ArtikelDetailComponent } from './artikel/artikel-detail/artikel-detail.component';
import { AdminArtikelComponent } from './admin/admin-artikel/admin-artikel.component';
import { AdminArtikelDetailComponent } from './admin/admin-artikel-detail/admin-artikel-detail.component';
import { JournalistIndexComponent } from './journalist/journalist-index/journalist-index.component';
import { NewArtikelComponent } from './journalist/new-artikel/new-artikel.component';
import { EditArtikelComponent } from './journalist/edit-artikel/edit-artikel.component';
import { TagService } from './admin/service/tag.service';
import { Observable } from 'rxjs';
import { Tag } from './admin/model/tag.model';

const routes: Routes = [
  {path: '', component: ArtikelComponent, data: {tagfilter: ""}},
  {path: 'volledigArtikel/:id', component: ArtikelDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component:SignupComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/journalist', component: JournalistComponent},
  {path: 'admin/addJournalist', component: AddJournalistComponent},
  {path: 'admin/tags', component: TagComponent},
  {path: 'admin/artikel', component: AdminArtikelComponent, data: {archief: false}},
  {path: 'admin/archief', component: AdminArtikelComponent, data: {archief: true}},
  {path: 'admin/artikel/:id', component: AdminArtikelDetailComponent, data: {archief: false}},
  {path: 'admin/archief/:id', component: AdminArtikelDetailComponent, data: {archief: true}},
  {path: 'journalist/index', component: JournalistIndexComponent},
  {path: 'journalist/artikel', component: NewArtikelComponent},
  {path: 'journalist/artikel/:id', component: EditArtikelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  tags: Observable<Tag[]>;
  constructor(private _tagService: TagService, private router: Router){
    
    const config = this.router.config;
    this.tags = this._tagService.getTags();
    this.tags.subscribe(r => r.forEach((element) => {
      config.push({path: element.name, component: ArtikelComponent, data: {tagfilter: element.tagID}});this.router.resetConfig(config); console.log(config)
    }))
    console.log("config", config)
    this.router.resetConfig(config);
    console.log("ROUTES", routes)
    
  }
  
 }
