import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl: string;

  constructor(private http: HttpClient ) {
    this.baseUrl = environment.PHY_CONTACT_BASEPATH;
   }

   create(data:Object): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}create`, data);
}


list(id:number): Observable<any> {
  return this.http.get(`${this.baseUrl}list?pagesize=10&start=${id}`);
}
}
