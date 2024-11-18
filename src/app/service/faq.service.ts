import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private baseUrl: string;

  constructor( private http: HttpClient ) {
    this.baseUrl = environment.PHY_FAQ_BASEPATH;


   }

   create(data:Object): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}create`, data);
}

list(id): Observable<any> {
  return this.http.get(`${this.baseUrl}answerList?pagesize=10&start=0`);
}

pageList(id:number): Observable<any> {
  return this.http.get(`${this.baseUrl}answerList?pagesize=10&start=${id}`);
}

view(id: string): Observable<any> {
  return this.http.get(`${this.baseUrl}answerView/${id}`);
}

update(id: string, value: any): Observable<any> {
  return this.http.post(`${this.baseUrl}edit/${id}`,value);
}


delete(id: string): Observable<any> {
  return this.http.get(`${this.baseUrl}deleteAnswer/${id}`);
}

status(status:boolean,id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}                                                                                                                                                                                              ?status=${status}&id=${id}`);
  }
}
