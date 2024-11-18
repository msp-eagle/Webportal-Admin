import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Contents} from "../../../bean/contents";
import {PhilsysnumberService} from "../../../service/philsysnumber/philsysnumber.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Registersterp2Service} from "../../../service/registerstep2/registersterp2.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-registerstep2-update',
  templateUrl: './registerstep2-update.component.html',
  styleUrls: ['./registerstep2-update.component.css']
})
export class Registerstep2UpdateComponent implements OnInit{

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


  constructor(private router: Router,private formBuilder:FormBuilder,private registersterp2Service:Registersterp2Service,private route: ActivatedRoute,){

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
    // this.registersterp2Service.update(this.id,formdata).subscribe(response => {
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
        this.registersterp2Service.update(this.id,formdata).subscribe(
          (response) => {
            Swal.fire('Updated!', 'The form has been updated Successfully.', 'success');
          },
          (error) => {
            Swal.fire('Error!', 'An error occurred while updating the form.', 'error');
          }
        );
        this.router.navigate(['/cms/registration-remainder-process'])
      }

    });

  }


  view() {
    this.registersterp2Service.view(this.id).subscribe(
      res => {
        this.contentdata  = res;
        console.log(res)
      }
    );
  }

}
