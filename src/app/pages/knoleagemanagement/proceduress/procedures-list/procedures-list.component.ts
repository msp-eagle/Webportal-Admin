import { Component } from '@angular/core';
import {Contents} from "../../../../bean/contents";
import {SuccessResponse} from "../../../../bean/successResponse";
import {ResponseData} from "../../../../bean/responseData";
import {DocumentService} from "../../../../service/knowlagemanagement/document.service";
import Swal from "sweetalert2";
import {ProceduresService} from "../../../../service/knowlagemanagement/procedures.service";

@Component({
  selector: 'app-procedures-list',
  templateUrl: './procedures-list.component.html',
  styleUrls: ['./procedures-list.component.css']
})
export class ProceduresListComponent {
  maxSize = 5;
  totalItems: number;
  currentPage = 1;
  start: number = 0;
  content: Contents[];
  responseMessage: string;
  successResponse: SuccessResponse;
  responses: any;


  response: ResponseData;

  constructor(public proceduresService: ProceduresService) {

  }

  ngOnInit(): void {
    this.list(this.start);
  }

  list(id: any) {
    this.proceduresService.list(id).subscribe(
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
        this.proceduresService.delete(id)
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


