import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl: string;

  constructor(private http: HttpClient ) {
    this.baseUrl = environment.PHY_HOME_BASEPATH;
   }

   create(data:Object): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}create`, data);
}


list(id:number): Observable<any> {
  return this.http.get(`${this.baseUrl}list`);
}
  createhome(data:Object): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}createhome`, data);
  }


  listhome(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}listhome`);
  }

  deletehome(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}deletehome/${id}`);
  }

  updatehome(id: string, value: any): Observable<any> {
    return this.http.post(`${this.baseUrl}edithome/${id}`,value);
  }

  viewhome(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}viewhome/${id}`);
  }

  creategraph(data:Object): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}creategraph`, data);
  }


  listgraph(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}listgraph`);
  }

  deletegraph(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}deletegraph/${id}`);
  }

  updategraph(id: string, value: any): Observable<any> {
    return this.http.post(`${this.baseUrl}editgraph/${id}`,value);
  }

  viewgraph(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}viewgraph/${id}`);
  }
}

