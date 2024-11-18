import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {SuccessResponse} from "../../../bean/successResponse";
import {Contents} from "../../../bean/contents";
import {ResponseData} from "../../../bean/responseData";
import {HomeService} from "../../../service/home.service";
import { map } from 'rxjs';
interface imageContent{
  id:number;
  image:string
}
@Component({
  selector: 'app-home-image-list',
  templateUrl: './home-image-list.component.html',
  styleUrls: ['./home-image-list.component.css']
})
export class HomeImageListComponent implements OnInit {

//
  maxSize = 5;
  totalItems: number;
  currentPage = 1;
  start: number = 0;
  content: imageContent[];
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
    this.aboutService.listhome(id).subscribe(
      res => {
        this.content = res;
        console.log("test image"+res);
        var img =res
        img.src = 'data:image/jpeg;base64,' + btoa(res);
        console.log(this.content)
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
        this.aboutService.deletehome(id)
          .subscribe(res=>{
           
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
