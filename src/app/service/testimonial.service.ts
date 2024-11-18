import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  private baseUrl: string;

  constructor(private http: HttpClient ) {
    this.baseUrl = environment.PHY_TESTIMONIAL_BASEPATH;
  }

  create(data:Object): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}creation`, data);
  }


  list(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}list`);
  }
}
