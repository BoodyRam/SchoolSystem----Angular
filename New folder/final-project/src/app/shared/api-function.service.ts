import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/Teacher';


@Injectable({
  providedIn: 'root'
})
export class ApiFunctionService {
  configUrl = 'http://localhost:3000/teachers'

  constructor(private http: HttpClient){}

get(): Observable<Teacher>{
  return this.http.get<Teacher>(this.configUrl)
}
getById(modelId){
  return this.http.get<Teacher>(this.configUrl + `/${modelId}`)
}
post(model): Observable<Teacher>{
return this.http.post<Teacher>(this.configUrl, model)
}
put(modelId, model : Teacher) : Observable<Teacher>{
  return this.http.put<Teacher>(this.configUrl + `/${modelId}`, model)
}
delete(modelId): Observable<Teacher>{
return this.http.delete<Teacher>(this.configUrl + `/${modelId}`)
}

}
