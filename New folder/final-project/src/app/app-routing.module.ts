import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateTeacherComponent } from './teacher/create-teacher/create-teacher.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : '', component : HomeComponent},
  {path : 'lt', component : ListTeacherComponent},
  {path : 'ct', component : CreateTeacherComponent},
  {path : 'lt/:id', component : UpdateTeacherComponent},
  {path : '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
