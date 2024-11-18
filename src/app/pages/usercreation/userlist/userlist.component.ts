import { Component } from '@angular/core';
import {Contents} from "../../../bean/contents";
import {SuccessResponse} from "../../../bean/successResponse";
import {ResponseData} from "../../../bean/responseData";
import {AboutbriefService} from "../../../service/about/aboutbrief.service";
import Swal from "sweetalert2";
import {LoginService} from "../../../service/loginservice/login.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  maxSize = 5;
  totalItems: number;
  currentPage = 1;
  start: number = 0;
  content: Contents[];
  responseMessage: string;
  successResponse: SuccessResponse;
  responses: any;


  response: ResponseData;

  constructor(public loginService: LoginService) {

  }

  ngOnInit(): void {
    this.list(this.start);
  }

  list(id: any) {
    this.loginService.list(id).subscribe(
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
        this.loginService.delete(id)
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
