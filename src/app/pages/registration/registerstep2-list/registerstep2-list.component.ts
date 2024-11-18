import {Component, OnInit} from '@angular/core';
import {Contents} from "../../../bean/contents";
import {SuccessResponse} from "../../../bean/successResponse";
import {ResponseData} from "../../../bean/responseData";
import {PhilsysnumberService} from "../../../service/philsysnumber/philsysnumber.service";
import Swal from "sweetalert2";
import {Registersterp2Service} from "../../../service/registerstep2/registersterp2.service";

@Component({
  selector: 'app-registerstep2-list',
  templateUrl: './registerstep2-list.component.html',
  styleUrls: ['./registerstep2-list.component.css']
})
export class Registerstep2ListComponent implements OnInit{
  maxSize = 5;
  totalItems: number;
  currentPage = 1;
  start: number = 0;
  content: Contents[];
  responseMessage: string;
  successResponse:  SuccessResponse;
  responses:any;


  response: ResponseData;

  constructor(public registersterp2Service:Registersterp2Service){

  }
  ngOnInit(): void {
    this.list(this.start);
  }

  list(id:any) {
    this.registersterp2Service.list(id).subscribe(
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
        this.registersterp2Service.delete(id)
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

