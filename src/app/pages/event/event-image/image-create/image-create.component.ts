import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HomeService} from "../../../../service/home.service";
import Swal from "sweetalert2";
import {
  HtmlEditorService,
  ImageService,
  LinkService, QuickToolbarService,
  TableService,
  ToolbarService
} from "@syncfusion/ej2-angular-richtexteditor";
import {EventService} from "../../../../service/event/event.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-image-create',
  templateUrl: './image-create.component.html',
  styleUrls: ['./image-create.component.css'],

})
export class ImageCreateComponent {
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

  response:any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private eventService:EventService){
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];

  }


  ngOnInit(): void {
    this.formgroup = this.formBuilder.group({
      image: [''],
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
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        const formData = new FormData();
        formData.append('image', this.formgroup.get('image').value);
        this.eventService.createimage(formData).subscribe(response => {
            this.response = response;
            Swal.fire('Submitted!', 'The form has been submitted Successfully.', 'success');
            console.log(formData);
          },
          (error) => {
            Swal.fire('Error!', 'An error occurred while submitted the form.', 'error');
          }
        );
        this.router.navigate(['/eventimage-list'])
      }
    });


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

