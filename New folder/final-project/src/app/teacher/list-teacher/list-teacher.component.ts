import { ApiFunctionService } from 'src/app/shared/api-function.service';
import { Component} from '@angular/core';
import { Teacher } from 'src/app/models/Teacher';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent{
allData : Teacher[]
id;

constructor(private service : ApiFunctionService) {
this.service.get().subscribe((data : any) =>{
this.allData = data;
})
}

delete(id){
  this.service.delete(id).subscribe(data =>{
    location.reload()
  })
}


}
