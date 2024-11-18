import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }


  isLoggedIn() {
    const token = localStorage.getItem('jwt_token');
    if (token) { return true }
    else { 
      this.router.navigate([''])
      return false }
  }
}
