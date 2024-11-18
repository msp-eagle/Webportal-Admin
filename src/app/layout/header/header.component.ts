import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

count:number;
  constructor(private router:Router){

  }
  firstname:string = localStorage.getItem('firstname')
  lastname:string = localStorage.getItem('lastname')
  currentUrl:string;
  ngOnInit(): void {
    this.currentUrl = this.router.url;
   }
  logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }



}
