import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateTeacherComponent } from './teacher/create-teacher/create-teacher.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { FormsModule } from "@angular/forms";
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    CreateTeacherComponent,
    ListTeacherComponent,
    UpdateTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
