import {Component, OnInit} from '@angular/core';
import {Contents} from "../../../bean/contents";
import {SuccessResponse} from "../../../bean/successResponse";
import {ResponseData} from "../../../bean/responseData";
import {HomeService} from "../../../service/home.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-home-graph-list',
  templateUrl: './home-graph-list.component.html',
  styleUrls: ['./home-graph-list.component.css']
})
export class HomeGraphListComponent implements OnInit {

//
  maxSize = 5;
  totalItems: number;
  currentPage = 1;
  start: number = 0;
  content: Contents[];
  responseMessage: string;
  successResponse:  SuccessResponse;
  responses:any;


  response: ResponseData;

  constructor(public aboutService: HomeService){

  }
  ngOnInit(): void {
    this.list(this.start);
  }

  list(id:any) {
    this.aboutService.listgraph(id).subscribe(
      res => {
        this.content = res;
        console.log("test image"+res);
        var img =res
        img.src = 'data:image/jpeg;base64,' + btoa(res);
        console.log("djkfhjdsfghjds :"+img.src)
        document.body.appendChild(img);
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
        this.aboutService.deletegraph(id)
          .subscribe(res=>{
            this.successResponse = res;
            this.responses = this.successResponse.message;
            if(res.deleted == true){
              this.content = this.content.filter(map => map.id != id )
              this.responseMessage = 'SUCCESS';
              Swal.fire(
                'Deleted!',
                'Your Data has been deleted',
                'success'
              ).then(() => {
                // location.reload();
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
