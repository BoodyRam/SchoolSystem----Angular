import { Router, ActivatedRoute } from '@angular/router';
import { ApiFunctionService } from './../../shared/api-function.service';
import { Component } from '@angular/core';
import { Teacher } from 'src/app/models/Teacher';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent {
model : Teacher = new Teacher()
id;
constructor(private service : ApiFunctionService, private Router : Router, private activeRouting : ActivatedRoute){
  this.id = this.activeRouting.snapshot.paramMap.get('id');
  this.service.getById(this.id).subscribe(data =>{
    this.model = data
  })
}
update(){
  this.service.put(this.id, this.model).subscribe((data: Teacher) =>{
    this.Router.navigateByUrl('lt')
  })
}
}


