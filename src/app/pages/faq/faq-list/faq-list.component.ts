import { Component } from '@angular/core';
import {Contents} from "../../../bean/contents";
import {SuccessResponse} from "../../../bean/successResponse";
import {ResponseData} from "../../../bean/responseData";
import {AboutbriefService} from "../../../service/about/aboutbrief.service";
import Swal from "sweetalert2";
import {FaqService} from "../../../service/faq.service";
import {Faq} from "../../../bean/faq";
import {DataprivacyService} from "../../../service/dataprivacy/dataprivacy.service";

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css']
})
export class FaqListComponent {
  maxSize = 5;
  totalItems: number;
  currentPage = 1;
  start: number = 0;
  content: Contents[];
  responseMessage: string;
  successResponse: SuccessResponse;
  responses: any;

  faq: Faq[];
  response: ResponseData;

  constructor(public faqService: FaqService) {

  }

  ngOnInit(): void {
    this.list(this.start);
  }

  list(id: any) {
    this.faqService.list(id).subscribe(
      res => {
      this.faq=res

             console.log(JSON.stringify(this.faq))

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
        this.faqService.delete(id)
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



  //
  // totalItems: number;
  // faq: Faq[];
  // responseMessage: string;
  // response: ResponseData;
  //
  // // isActive=false;
  //
  //
  // constructor(private faqService: FaqService) {
  //
  // }
  // ngOnInit(): void {
  //   this.list();
  //
  //
  // }
  //
  // list() {
  //   this.faqService.list().subscribe(
  //     res => {
  //       this.response = res;
  //       this.totalItems = this.response.totalRecords;
  //       this.faq = this.response.data;
  //
  //     }
  //   );
  // }
  //
  //
  // toggleAccordian(event, index) {
  //   const element = event.target;
  //   element.classList.toggle("active");
  //   if (this.faq[index].id) {
  //     this.faq[index].isActive = false;
  //   } else {
  //     this.faq[index].isActive = true;
  //   }
  //   const panel = element.nextElementSibling;
  //   if (panel.style.maxHeight) {
  //     panel.style.maxHeight = null;
  //   } else {
  //     panel.style.maxHeight = panel.scrollHeight + "px";
  //   }
  // }
}
