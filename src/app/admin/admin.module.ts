import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagComponent } from './tag/tag.component';
import { FormsModule } from '@angular/forms';
import { JournalistComponent } from './journalist/journalist.component';
import { AddJournalistComponent } from './add-journalist/add-journalist.component';
import { AdminArtikelComponent } from './admin-artikel/admin-artikel.component';
import { AdminArtikelDetailComponent } from './admin-artikel-detail/admin-artikel-detail.component';

@NgModule({
  declarations: [AdminComponent, TagComponent, JournalistComponent, AddJournalistComponent, AdminArtikelComponent, AdminArtikelDetailComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class AdminModule { }
