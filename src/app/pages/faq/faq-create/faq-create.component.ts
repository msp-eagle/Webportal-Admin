import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FaqService } from 'src/app/service/faq.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-faq-create',
  templateUrl: './faq-create.component.html',
  styleUrls: ['./faq-create.component.css']
})
export class FaqCreateComponent implements OnInit {
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
      private faqService:FaqService){

    }


    ngOnInit(): void {
      this.formgroup = this.formBuilder.group({
        question: ['',[Validators.required]],
        answer: ['',[Validators.required]],
        status: [false,[Validators.required]]



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
          this.faqService.create(this.formgroup.value).subscribe(response => {

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
                this.router.navigateByUrl('/cms/faq');
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
