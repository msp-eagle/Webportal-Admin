import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PhilsysnumberService} from "../../../service/philsysnumber/philsysnumber.service";
import {TransparancyService} from "../../../service/transparancy/transparancy.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transparancy-create',
  templateUrl: './transparancy-create.component.html',
  styleUrls: ['./transparancy-create.component.css']
})
export class TransparancyCreateComponent implements OnInit{
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

  constructor(private formBuilder:FormBuilder,private transparancyService:TransparancyService,      private router: Router
  ){

  }



  ngOnInit(): void {

    this.formgroup = this.formBuilder.group({
      content:['']
    })
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
    // this.transparancyService.create(formdata).subscribe(response => {
    //
    //   this.response = response;
    // });
    Swal.fire({
    title: 'Are you sure?',
      text: 'You want to submit the form',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes, saved it',
      cancelButtonText: 'No, cancel'
  }).then((result) => {
      if (result.value) {
        this.transparancyService.create(formdata).subscribe(
          (response) => {
            this.response = response;
            Swal.fire('Submitted!', 'The form has been submitted Successfully.', 'success');
          },
          (error) => {
            Swal.fire('Error!', 'An error occurred while submitted the form.', 'error');
          }
        );
        this.router.navigate(['/cms/transparency'])
      }

    });



  }

}
