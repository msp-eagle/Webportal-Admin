import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Contents} from "../../../bean/contents";
import {FaqService} from "../../../service/faq.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";
import {
  HtmlEditorService,
  ImageService,
  LinkService, QuickToolbarService,
  TableService,
  ToolbarService
} from "@syncfusion/ej2-angular-richtexteditor";
import {HomeService} from "../../../service/home.service";
import {Homeimage} from "../../../bean/home/homeimage";

@Component({
  selector: 'app-home-image-edit',
  templateUrl: './home-image-edit.component.html',
  styleUrls: ['./home-image-edit.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService,TableService, QuickToolbarService],

})
export class HomeImageEditComponent {
  isValid() {
    return this.formgroup.controls;
  }

  formgroup:FormGroup;

  responseMessage: string;
  isLoadingResults: boolean;
  isSubmitted = false;
  isloading: boolean;
  errorMsg: any;
  subscription: any;
  response:any;
  id:any;
  data:string = null;
  isImageFile:boolean;
  attachemetImage:boolean;
  contentdata:Contents;
  homeimage:Homeimage;

  constructor(private formBuilder:FormBuilder,private ephilidService: HomeService,private route: ActivatedRoute,private router: Router){

  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.formgroup = this.formBuilder.group({
      image:[''],
    })


    this.view();
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
    else{
      this.isImageFile = false;
      this.attachemetImage = false;
      this.data=null;
    }
  }

  onSubmit(): void {
    if (this.formgroup.invalid || this.data == null) {
      Swal.fire({
        text: 'Please upload the file',
        icon:'error'
      })
      return;
    }
    this.responseMessage = '';
    this.isSubmitted = true;
    this.isLoadingResults = true;

    const formdata = new FormData;
    formdata.append('image', this.formgroup.get('image').value);

    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to update the form',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.value) {
        this.ephilidService.updatehome(this.id,formdata).subscribe(
          (response) => {
            this.router.navigate(['/cms/homeimage']);
            Swal.fire('Updated!', 'Image has been updated Successfully.', 'success');
          },
          (error) => {
            Swal.fire('Error!', 'An error occurred while updating the form.', 'error');
          }
        );
        this.router.navigate(['/homeimage-list'])
      }

    });

  }


  view() {
    this.ephilidService.viewhome(this.id).subscribe(
      res => {
        this.homeimage=res;

        // this.contentdata.image  = this.imagess;
        // console.log("image"+JSON.stringify(this.imagess));
      }
    );
  }

}
