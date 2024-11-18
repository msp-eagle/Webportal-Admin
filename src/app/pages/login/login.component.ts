import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginInputs } from "../../service/login-inputs";
import { Contents } from "../../bean/contents";
import { AboutbriefService } from "../../service/about/aboutbrief.service";
import { ActivatedRoute, Router } from "@angular/router";
import Swal from "sweetalert2";
import { LoginService } from "../../service/loginservice/login.service";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // formgroup: FormGroup;

  responseMessage: string;
  isLoadingResults: boolean;
  isSubmitted = false;
  isloading: boolean;
  errorMsg: any;
  subscription: any;
  response: any;
  id: any;
  formgroup: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.responseMessage = '';

    this.isSubmitted = true;

    if (this.formgroup.invalid) {
      return;
    }

    this.isLoadingResults = true;

    console.log(this.formgroup.value)
    const email = this.formgroup.value.email;
    const password = this.formgroup.value.password;
    console.log(password)

    this.loginService.finduser(this.formgroup.value).subscribe((res: any) => {
      console.log("admin login :" + res)

      if (res.status == "FOUND") {
        console.log("Logged in successfully");

        localStorage.setItem('email', res.responseData.email);
        localStorage.setItem('firstname', res.responseData.firstname);
        localStorage.setItem('lastname', res.responseData.lastname);
        localStorage.setItem('isLoggedIn', "true");
        this.router.navigate(['/dashboard'])
      }
      else if (res.status == "NOT_FOUND") {
        Swal.fire({
          icon: 'error',  // The icon type ('error', 'success', 'warning', 'info', etc.)
          title: 'Error',
          text: 'Invalid Username or Password',
        });
      }
      else {
        Swal.fire({
          icon: 'error',  // The icon type ('error', 'success', 'warning', 'info', etc.)
          title: 'Error',
          text: 'Something wrong happened, try again later',
        });
      }
    });


  }

}
