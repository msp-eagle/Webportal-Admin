import { Component } from '@angular/core';
import {Contents} from "../../../bean/contents";
import {SuccessResponse} from "../../../bean/successResponse";
import {ResponseData} from "../../../bean/responseData";
import {Faq} from "../../../bean/faq";
import {FaqService} from "../../../service/faq.service";
import {EphilfaqService} from "../../../service/ephilfaq.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-ephilid-faq-list',
  templateUrl: './ephilid-faq-list.component.html',
  styleUrls: ['./ephilid-faq-list.component.css']
})
export class EphilidFaqListComponent {

  maxSize = 5;
  totalItems: number;
  currentPage = 1;
  start: number = 0;
  content: Contents[];
  responseMessage: string;
  successResponse:  SuccessResponse;
  responses:any;


  response: ResponseData;
  faq: Faq[];


  constructor(public ephilfaqService:EphilfaqService){

  }
  ngOnInit(): void {
    this.list();
  }

  list() {
    this.ephilfaqService.list().subscribe(
      res => {
        this.faq=res

        console.log(JSON.stringify(this.faq))

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
        this.ephilfaqService.delete(id)
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
