import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialModule} from './materialDesign/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ArtikelModule} from './artikel/artikel.module';
import {AdminModule} from './admin/admin.module';
import {LoginModule} from './login/login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JournalistModule } from './journalist/journalist.module';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    NgbModule,
    ArtikelModule,
    AdminModule,
    LoginModule,
    FontAwesomeModule,
    JournalistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
