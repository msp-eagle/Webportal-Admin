import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../../../service/loginservice/login.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-usercreation',
  templateUrl: './usercreation.component.html',
  styleUrls: ['./usercreation.component.css']
})
export class UsercreationComponent implements OnInit {


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
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
  }


  OnSubmit() {
    this.responseMessage = '';
    this.isSubmitted = true;

    if (this.formgroup.invalid) {
      return;
    }

    this.isLoadingResults = true;

    console.log(this.formgroup.value)


    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to submit the form',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.value) {
        this.loginService.createUser(this.formgroup.value).subscribe(
          (response) => {
            this.response = response;
            this.formgroup.reset();
            Swal.fire('Submitted!', 'The form has been submitted Successfully.', 'success');
          },
          (error) => {
            Swal.fire('Error!', 'An error occurred while submitted the form.', 'error');
          }
        );
        // this.router.navigate(['/about-brieflist'])
      }

    });

  }
}







