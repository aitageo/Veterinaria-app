import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseApi } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public urlbase = "http://localhost:3100/api/veterinario"
   
  constructor(private http : HttpClient) {
  
  }

  login(email:string,password:string):Observable<ResponseApi>{
    const body = { email, password};
    return this.http.post<ResponseApi>(`${this.urlbase}/login`, body)
   
   }


}
