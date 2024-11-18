import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutbriefService {

  private baseUrl: string;

  constructor(private http: HttpClient ) {
    this.baseUrl = environment.PHY_ABOUTBRIEF_BASEPATH;
   }

   create(data:Object): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}create`, data);
}


list(id:number): Observable<any> {
  return this.http.get(`${this.baseUrl}list`);
}

delete(id: string): Observable<any> {
  return this.http.get(`${this.baseUrl}delete/${id}`);
}

update(id: string, value: any): Observable<any> {
  return this.http.post(`${this.baseUrl}edit/${id}`,value);
}

view(id: string): Observable<any> {
  return this.http.get(`${this.baseUrl}view/${id}`);
}


}
