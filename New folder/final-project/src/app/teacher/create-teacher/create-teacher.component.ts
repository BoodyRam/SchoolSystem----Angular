import { Teacher } from './../../models/Teacher';
import { ApiFunctionService } from './../../shared/api-function.service';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent{
model = new Teacher()
constructor(private service : ApiFunctionService, private Router : Router){}
save(){
this.service.post(this.model).subscribe((data : any) =>{
  this.Router.navigateByUrl('lt')
})
}
}
