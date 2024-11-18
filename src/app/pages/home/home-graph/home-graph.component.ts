import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {HomeService} from "../../../service/home.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-home-graph',
  templateUrl: './home-graph.component.html',
  styleUrls: ['./home-graph.component.css']
})
export class HomeGraphComponent {

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
              private eventService:HomeService){
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
    if (this.data == null || this.formgroup.invalid) {
      Swal.fire({
        text: 'Please upload the file',
        icon:'error'
      })
      return;
    }
    this.responseMessage = '';
    this.isSubmitted = true;
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
        this.eventService.creategraph(formData).subscribe(response => {
            this.response = response;
            Swal.fire('Submitted!', 'The form has been submitted Successfully.', 'success').then(() => {
              this.router.navigate(['/cms/homegraph']);
            });
          },
          (error) => {
            Swal.fire('Error!', 'An error occurred while submitted the form.', 'error');
          }
        );
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
    else {
      this.isImageFile=false;
      this.data = null;
    }
  }


}
