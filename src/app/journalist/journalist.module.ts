import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { JournalistIndexComponent } from './journalist-index/journalist-index.component';
import { NewArtikelComponent } from './new-artikel/new-artikel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditArtikelComponent } from './edit-artikel/edit-artikel.component';

@NgModule({
  declarations: [JournalistIndexComponent, NewArtikelComponent, EditArtikelComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
   NgbModule
  ]
})
export class JournalistModule { }
