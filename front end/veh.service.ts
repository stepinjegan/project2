import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { vehModel } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class VehService {
   private readonly URL:string="localhost:3000/vechicledetails";
  constructor(private http:HttpClient) { }

  Create(data:vehModel):Observable<vehModel>
  {
    return this.http.post<vehModel>(this.URL,data);
  }
 
}
