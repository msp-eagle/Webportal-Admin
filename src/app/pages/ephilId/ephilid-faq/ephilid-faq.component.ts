import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {FaqService} from "../../../service/faq.service";
import Swal from "sweetalert2";
import {EphilfaqService} from "../../../service/ephilfaq.service";

@Component({
  selector: 'app-ephilid-faq',
  templateUrl: './ephilid-faq.component.html',
  styleUrls: ['./ephilid-faq.component.css']
})
export class EphilidFaqComponent implements OnInit {
  formgroup:FormGroup;
  responseMessage: string;
  isLoadingResults: boolean;
  isSubmitted = false;
  subcription: Subscription;
  isloading: boolean;
  errorMsg: any;
  subscription: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private ephilfaqService:EphilfaqService){

  }


  ngOnInit(): void {
    this.formgroup = this.formBuilder.group({
      question: ['',[Validators.required]],
      answer: ['',[Validators.required]],



    })
    this.isloading = false;

  }

  isValid() {
    return this.formgroup.controls;
  }

  onSubmit(): void {
    this.responseMessage = '';

    this.isSubmitted = true;

    if (this.formgroup.invalid) {
      return;
    }

    this.isLoadingResults = true;


    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.ephilfaqService.create(this.formgroup.value).subscribe(response => {

          this.isLoadingResults = false;
          const responseType = response['responseType'];
          console.log(response);

          if (responseType === 'VALIDATION') {
            const validationErrors = response['validationErrors'];

            for (const fieldName of Object.keys(response['validationErrors'])) {
              const serverErrors = validationErrors[fieldName];

              const errors = {};
              for (const serverError of serverErrors) {
                // errors[serverError] = true;
              }

              const control = this.formgroup.get(fieldName);
              control.setErrors(errors);
              control.markAsDirty();
              this.isLoadingResults = false;
              this.responseMessage = 'VALIDATION';
            }
          }
          else if (responseType === 'SUCCESS') {
            this.isLoadingResults = true;

            this.responseMessage = 'SUCCESS';
            Swal.fire(
              'Created!',
              'Faq Created successfully.',
              'success'
            ).then(() => {
              this.router.navigateByUrl('/ephilidfaq-list');
            });
          }

          else {
            this.responseMessage = 'ERROR';
          }

        });
      }
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          ' ',
          'error'
        )
      }
    })


  }
}
