import {Component, OnInit} from '@angular/core';
import {Contents} from "../../../bean/contents";
import {SuccessResponse} from "../../../bean/successResponse";
import {ResponseData} from "../../../bean/responseData";
import {PhilsysnumberService} from "../../../service/philsysnumber/philsysnumber.service";
import Swal from "sweetalert2";
import {RegistercenterService} from "../../../service/registrationcenter/registercenter.service";

@Component({
  selector: 'app-registercenter-list',
  templateUrl: './registercenter-list.component.html',
  styleUrls: ['./registercenter-list.component.css']
})
export class RegistercenterListComponent implements OnInit{
  maxSize = 5;
  totalItems: number;
  currentPage = 1;
  start: number = 0;
  content: Contents[];
  responseMessage: string;
  successResponse:  SuccessResponse;
  responses:any;


  response: ResponseData;

  constructor(public registercenterService:RegistercenterService){

  }
  ngOnInit(): void {
    this.list(this.start);
  }

  list(id:any) {
    this.registercenterService.list(id).subscribe(
      res => {
        this.content = res;
        // this.totalItems = this.response.totalRecords;
        // this.event = this.response.data;

      }
    );
  }


  delete(id:any){

    Swal.fire({
      title: 'Are you sure?',
      text: 'You wont be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes,delete it',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        this.registercenterService.delete(id)
          .subscribe(res=>{
            this.successResponse = res;
            this.responses = this.successResponse.message;
            if(this.responses == 'Deleted successfully'){
              this.responseMessage = 'SUCCESS';
              Swal.fire(
                'Deleted!',
                'Your Data has been deleted',
                'success'
              ).then(() => {
                location.reload();
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

}
