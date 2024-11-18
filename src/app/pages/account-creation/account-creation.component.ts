import { Component } from '@angular/core';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent {

  email:string = localStorage.getItem('email');
  firstname:string = localStorage.getItem('firstname')
  lastname:string = localStorage.getItem('lastname')

}
