import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './navbar/navbar.component';

import { UserListComponent } from './user-list/user-list.component';
import { UserSingleComponent } from './user-list/user-single/user-single.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserSingleComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
