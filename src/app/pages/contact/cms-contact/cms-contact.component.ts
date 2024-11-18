import { Component } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Contact } from 'src/app/bean/Contact';
import { ResponseData } from 'src/app/bean/responseData';
import { SuccessResponse } from 'src/app/bean/successResponse';
import { ContactService } from 'src/app/service/contact/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cms-contact',
  templateUrl: './cms-contact.component.html',
  styleUrls: ['./cms-contact.component.css']
})
export class CmsContactComponent {
  maxSize = 5;
  totalItems: number;
  currentPage = 1;
  start: number = 0;
  
  responseMessage: string;
  successResponse:  SuccessResponse;
  responses:any;
  location:Contact[];


  response: ResponseData;
  constructor(public service:ContactService){

  }
  ngOnInit(): void {
    this.list(this.start);
  }

  list(id:number) {
    this.service.list(id).subscribe(
       res => {
         this.response = res;
         this.totalItems = this.response.totalRecords;
         this.location = this.response.data;
             }
      );

     
   }

  pageChanged(event: PageChangedEvent): void {

    let start = event.page - 1;

    this.service.list(start).subscribe(
      res => {
        this.response = res;
        this.totalItems = this.response.totalRecords;
        this.location = this.response.data;
      }
    );

  }



}
