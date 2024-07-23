import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  public getAdmin(username,password):Observable<any>
  {
    return this.http.get(`http://localhost:8080/getAdmin/${username}/${password}`)
  }

}
