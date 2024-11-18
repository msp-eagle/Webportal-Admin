import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../service/loginservice/login.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Contents} from "../../../bean/contents";
import {AboutbriefService} from "../../../service/about/aboutbrief.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {

  formgroup:FormGroup;

  responseMessage: string;
  isLoadingResults: boolean;
  isSubmitted = false;
  isloading: boolean;
  errorMsg: any;
  subscription: any;
  response:any;
  id:any;

  contentdata:Contents;


  constructor(private formBuilder:FormBuilder,private loginService:LoginService,private route: ActivatedRoute,private router:Router){

  }



  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.formgroup = this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]

    })


    this.view();
  }


  onSubmit(): void {
    this.responseMessage = '';

    this.isSubmitted = true;

    if (this.formgroup.invalid) {
      return;
    }

    this.isLoadingResults = true;
     console.log(this.formgroup.value)

    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to update the form',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.value) {
        this.loginService.update(this.id,this.formgroup.value).subscribe(
          (response) => {
            Swal.fire('Updated!', 'The form has been updated Successfully.', 'success');
          },
          (error) => {
            Swal.fire('Error!', 'An error occurred while updating the form.', 'error');
          }
        );
        this.router.navigate(['/user-list'])
      }

    });


  }


  view() {
    this.loginService.view(this.id).subscribe(
      res => {
        this.contentdata  = res;
        console.log(res)
      }
    );
  }
}


