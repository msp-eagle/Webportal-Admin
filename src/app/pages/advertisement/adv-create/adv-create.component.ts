import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdvertisementService } from 'src/app/service/advertisement/advertisement.service';
import { ContactService } from 'src/app/service/contact/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adv-create',
  templateUrl: './adv-create.component.html',
  styleUrls: ['./adv-create.component.css']
})
export class AdvCreateComponent  implements OnInit {



  formgroup:FormGroup;
responseMessage: string;
isLoadingResults: boolean;
isSubmitted = false;
subcription: Subscription;
isloading: boolean;
errorMsg: any;
subscription: any;

isImageFile:boolean;
attachemetImage:boolean;
data:string;
maxDate = new Date();
bsInlineValue = new Date();
bsInlineRangeValue: Date[];


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private adverService:AdvertisementService){
      this.maxDate.setDate(this.maxDate.getDate() + 7);
      this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];

  }


  ngOnInit(): void {
    this.formgroup = this.formBuilder.group({
      advtitle: ['',[Validators.required]],
      advdesc: ['',[Validators.required]],
      advdate: ['',[Validators.required]],
      advtime: ['',[Validators.required]],
      image: [''],






    })
    this.isloading = false;

  }

isValid() {
    return this.formgroup.controls;
  }

  onSubmits(): void {
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
        const formData = new FormData();
        formData.append('advtitle', this.formgroup.get('advtitle').value);

        formData.append('advdesc', this.formgroup.get('advdesc').value);
        formData.append('advdate', this.formgroup.get('advdate').value);
        formData.append('advtime', this.formgroup.get('advtime').value);
        formData.append('image', this.formgroup.get('image').value);
   ;



        this.adverService.create(formData).subscribe(response => {

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
              'Advertisement Created successfully.',
              'success'
            ).then(() => {
              // this.router.navigateByUrl('/main/davangreeevent-list');
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






onFileSelect(event): void {

  const reader = new FileReader();


  if (event.target.files.length > 0) {
    const latestFile = event.target.files[0];

    if (latestFile.type == "image/jpeg" || latestFile.type == "image/jpg" || latestFile.type == "image/png") {
      this.isImageFile = true;
      this.attachemetImage = true;
      reader.readAsDataURL(latestFile);
      reader.onload = () => {
        this.data = reader.result as string;
      };
      this.formgroup.patchValue({
        image: latestFile,
        filename: latestFile.name,
        filetype: latestFile.type
      });
    } else {
      this.isImageFile = false;
      this.formgroup.controls['image'].setErrors({ 'incorrect': true });




    }

  }
}
}
