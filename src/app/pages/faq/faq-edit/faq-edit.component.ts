import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Contents} from "../../../bean/contents";
import {EphilfaqService} from "../../../service/ephilfaq.service";
import {ActivatedRoute, Router} from "@angular/router";
import {
  HtmlEditorService,
  ImageService,
  LinkService, QuickToolbarService,
  TableService,
  ToolbarService
} from "@syncfusion/ej2-angular-richtexteditor";
import {FaqService} from "../../../service/faq.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-faq-edit',
  templateUrl: './faq-edit.component.html',
  styleUrls: ['./faq-edit.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService,TableService, QuickToolbarService],

})
export class FaqEditComponent {
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

  contentdata:Contents;


  constructor(private formBuilder:FormBuilder,private ephilidService: FaqService,private route: ActivatedRoute,private router: Router){

  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.formgroup = this.formBuilder.group({
      question:[''],
      answer:['']
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

    const formdata = new FormData;
    formdata.append('question', this.formgroup.get('question').value);
    formdata.append('answer', this.formgroup.get('answer').value);

    // console.log("faq answer:"+JSON.stringify(this.contentdata));
    // this.ephilidService.update(this.id,formdata).subscribe(res => {
    //   this.response = res;
    // });
    // this.ephilidService.update(this.id,this.contentdata).subscribe(res => {
    //   this.response = res;
    // });

    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to update the form',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.value) {
        this.ephilidService.update(this.id,formdata).subscribe(
          (response) => {
            Swal.fire('Updated!', 'The form has been updated Successfully.', 'success');
          },
          (error) => {
            Swal.fire('Error!', 'An error occurred while updating the form.', 'error');
          }
        );
        this.router.navigate(['/cms/faq'])
      }

    });

  }


  view() {
    this.ephilidService.view(this.id).subscribe(
      res => {
        this.contentdata  = res;
        console.log(res)
      }
    );
  }

}
