import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AboutbriefService} from "../../../service/about/aboutbrief.service";
import {TestimonialService} from "../../../service/testimonial.service";
import {
  HtmlEditorService,
  ImageService,
  LinkService, QuickToolbarService,
  TableService,
  ToolbarService
} from "@syncfusion/ej2-angular-richtexteditor";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {FaqService} from "../../../service/faq.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService,TableService, QuickToolbarService],
})
export class TestimonialComponent implements OnInit {
  formgroup:FormGroup;
  img: File;
  responseMessage: string;
  isLoadingResults: boolean;
  isSubmitted = false;
  subcription: Subscription;
  isloading: boolean;
  errorMsg: any;
  subscription: any;
  submitted = false;



  //for image

  isImageFile:boolean;
  fileData: File = null;
  data:string;
  attachemetImage:boolean;
  checkbox: any;
  // eventReq: Event=new Event();

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private testimonialService:TestimonialService){

  }


  ngOnInit(): void {
    this.formgroup = this.formBuilder.group({
      title: ['',[Validators.required]],
      description: ['',[Validators.required]],
      image: ['',[Validators.required]],
      address: ['',[Validators.required]],



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
    const formdata = new FormData;
    // formdata.append('content', this.formgroup.get('content').value);
    formdata.append('title',this.formgroup.get('title').value);
    formdata.append('image',this.formgroup.get('image').value);
    formdata.append('description',this.formgroup.get('description').value);
    formdata.append('address',this.formgroup.get('address').value);

// console.log(formdata);
alert('test'+ formdata);
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      alert('test' + JSON.stringify( this.formgroup.value));
      if (result.value) {

        this.testimonialService.create(formdata).subscribe(response => {
          this.isLoadingResults = false;
          const responseType = response['responseType'];
          console.log(JSON.stringify(response));

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
              this.router.navigateByUrl('/faq-list');
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

  onFileChanged(event) {
    this.img = event.target.files[0];

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

    }  }
}
