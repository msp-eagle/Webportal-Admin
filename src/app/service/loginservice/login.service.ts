import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string;

  constructor(private http: HttpClient ) {
    this.baseUrl = environment.PHY_LOGIN_BASEPATH;
  }


  finduser(value: any): Observable<any> {
    console.log("value :"+JSON.stringify(value))
    return this.http.post(`${this.baseUrl}login`,value);
  }





  list(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}list`);
  }
  delete(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}delete/${id}`);
  }



  view(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}view/${id}`);
  }

  createUser(value: any) {
    return this.http.post<any>(`${this.baseUrl}create`, value);
  }


  update(id: string, value: any): Observable<any> {
    return this.http.post(`${this.baseUrl}edit/${id}`,value);
  }

  forgotPasswordOtpGenerate(data:any): Observable<any> {
    return this.http.post(`${this.baseUrl}forgotPassword/otpGenerate`,data, {responseType: 'json'});
  }

  forgotPasswordOtpValidate(otp:string, key:string): Observable<any> {
    return this.http.get(`${this.baseUrl}forgotPassword/otpValidate?otp=${otp}&key=${key}`, {responseType: 'json'});
  }

  passwordChange(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}forgotPassword/passwordChange`,data, {responseType: 'json'});
  }
}
