import {Component, OnInit} from '@angular/core';
import {
  HtmlEditorService,
  ImageService,
  LinkService, QuickToolbarService,
  TableService,
  ToolbarService
} from "@syncfusion/ej2-angular-richtexteditor";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Contents} from "../../../bean/contents";
import {RelpartyService} from "../../../service/partners/relparty.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QrcodeService} from "../../../service/partners/qrcode.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-qrscan-edit',
  templateUrl: './qrscan-edit.component.html',
  styleUrls: ['./qrscan-edit.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService,TableService, QuickToolbarService],

})
export class QrscanEditComponent implements OnInit {


  public value: string = `
    <p>The RichTextEditor triggers events based on its actions. </p>
                        <p> The events can be used as an extension point to perform custom operations.</p>
                        <ul>
                            <li>created - Triggers when the component is rendered.</li>
                            <li>change - Triggers only when RTE is blurred and changes are done to the content.</li>
                            <li>focus - Triggers when RTE is focused in.</li>
                            <li>blur - Triggers when RTE is focused out.</li>
                            <li>actionBegin - Triggers before command execution using toolbar items or executeCommand method.</li>
                            <li>actionComplete - Triggers after command execution using toolbar items or executeCommand method.</li>
                            <li>destroyed – Triggers when the component is destroyed.</li>
                        </ul>`;
  public tools: object = {
    items: ['Undo', 'Redo', '|',
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'SubScript', 'SuperScript', '|',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  };
  public quickTools: object = {
    image: [
      'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', '-', 'Display', 'AltText', 'Dimension']
  };




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


  constructor(private formBuilder:FormBuilder,private aboutService:QrcodeService,
              private router: Router,private route: ActivatedRoute,){

  }



  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.formgroup = this.formBuilder.group({
      content:['']
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
    formdata.append('content', this.formgroup.get('content').value);
    // this.aboutService.update(this.id,formdata).subscribe(response => {
    //
    //   this.response = response;
    // });

    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to update the form',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.value) {
        this.aboutService.update(this.id,formdata).subscribe(
          (response) => {
            Swal.fire('Updated!', 'The form has been updated Successfully.', 'success');
          },
          (error) => {
            Swal.fire('Error!', 'An error occurred while updating the form.', 'error');
          }
        );
        this.router.navigate(['/qrscan-list'])
      }

    });

  }


  view() {
    this.aboutService.view(this.id).subscribe(
      res => {
        this.contentdata  = res;
        console.log(res)
      }
    );
  }

}
