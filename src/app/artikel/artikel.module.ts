import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtikelComponent } from './artikel/artikel.component';
import { ArtikelDetailComponent } from './artikel-detail/artikel-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ArtikelComponent, ArtikelDetailComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class ArtikelModule { }
