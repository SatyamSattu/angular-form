import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TestReactiveComponent } from './test-reactive/test-reactive.component';
import { UserListingComponent } from './user-listing/user-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    TestReactiveComponent,
    UserListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
   

  ],
  providers: [],
  bootstrap: [AppComponent ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
