import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EphilidService {


  private baseUrl: string;

  constructor(private http: HttpClient ) {
    this.baseUrl = environment.PHY_EPHILID_BASEPATH;
  }

  create(data:Object): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}create`, data);
  }

  list(): Observable<any> {
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
  createimage(data:Object): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}createimage`, data);
  }


  listimage(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}listimage`);
  }

  deleteimage(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}deleteimage/${id}`);
  }

  updateimage(id: string, value: any): Observable<any> {
    return this.http.post(`${this.baseUrl}editimage/${id}`,value);
  }

  viewimage(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}viewimage/${id}`);
  }
}
