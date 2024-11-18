import {Component, OnInit} from '@angular/core';
import {Contents} from "../../../bean/contents";
import {SuccessResponse} from "../../../bean/successResponse";
import {ResponseData} from "../../../bean/responseData";
import {PhilsysnumberService} from "../../../service/philsysnumber/philsysnumber.service";
import Swal from "sweetalert2";
import {LegalbaseService} from "../../../service/legelbase/legalbase.service";

@Component({
  selector: 'app-legal-list',
  templateUrl: './legal-list.component.html',
  styleUrls: ['./legal-list.component.css']
})
export class LegalListComponent implements OnInit {
  maxSize = 5;
  totalItems: number;
  currentPage = 1;
  start: number = 0;
  content: Contents[];
  responseMessage: string;
  successResponse: SuccessResponse;
  responses: any;


  response: ResponseData;

  constructor(public legalbaseService: LegalbaseService) {

  }

  ngOnInit(): void {
    this.list(this.start);
  }

  list(id: any) {
    this.legalbaseService.list(id).subscribe(
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
        this.legalbaseService.delete(id)
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
