import { Component } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import {  Contents } from 'src/app/bean/contents';
import { ResponseData } from 'src/app/bean/responseData';
import { SuccessResponse } from 'src/app/bean/successResponse';
import { AboutbriefService } from 'src/app/service/about/aboutbrief.service';
import { ContactService } from 'src/app/service/contact/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aboutbrief-list',
  templateUrl: './aboutbrief-list.component.html',
  styleUrls: ['./aboutbrief-list.component.css']
})
export class AboutbriefListComponent {


  maxSize = 5;
  totalItems: number;
  currentPage = 1;
  start: number = 0;
  content: Contents[];
  responseMessage: string;
  successResponse: SuccessResponse;
  responses: any;


  response: ResponseData;

  constructor(public aboutService: AboutbriefService) {

  }

  ngOnInit(): void {
    this.list(this.start);
  }

  list(id: any) {
    this.aboutService.list(id).subscribe(
      res => {
        this.content = res;
        // this.totalItems = this.response.totalRecords;
        // this.event = this.response.data;

      }
    );
  }


  delete(id: any) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You wont be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes,delete it',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.aboutService.delete(id)
          .subscribe(res => {
            this.successResponse = res;
            this.responses = this.successResponse.message;
            if (this.responses == 'Deleted successfully') {
              this.responseMessage = 'SUCCESS';
              Swal.fire(
                'Deleted!',
                'Your Data has been deleted',
                'success'
              ).then(() => {
                location.reload();
              });
            } else {
              this.responseMessage = 'ERROR';
            }

          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          ' ',
          'error'
        )
      }
    })
  }
}

