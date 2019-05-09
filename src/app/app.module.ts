import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { MyAppComponent } from './mydashboard.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [ MyAppComponent ],

  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    AppRoutingModule,
    TypeaheadModule.forRoot()
  ],

  providers: [],

  bootstrap: [MyAppComponent]
})

export class AppModule { }
