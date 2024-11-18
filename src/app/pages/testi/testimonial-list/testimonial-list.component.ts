import { Component } from '@angular/core';
import {Contents} from "../../../bean/contents";
import {SuccessResponse} from "../../../bean/successResponse";
import {ResponseData} from "../../../bean/responseData";
import {AboutbriefService} from "../../../service/about/aboutbrief.service";
import Swal from "sweetalert2";
import {TestimonialService} from "../../../service/testimonial.service";
import {Event} from "../../../bean/event";
import {EventService} from "../../../service/event.service";
import {Advertisement} from "../../../bean/advertisement";
import {AdvertisementService} from "../../../service/advertisement/advertisement.service";
import {Testimonial} from "../../../bean/testimonial";

@Component({
  selector: 'app-testimonial-list',
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.css']
})
export class TestimonialListComponent {


  maxSize = 5;
  totalItems: number;
  currentPage = 1;
  start: number = 0;
  testimonial: Testimonial[];
  responseMessage: string;
  successResponse:  SuccessResponse;
  responses:any;


  response: ResponseData;

  constructor(public testimonialService:TestimonialService,
  ){

  }
  ngOnInit(): void {
    this.list(this.start);
  }

  list(id:any) {
    this.testimonialService.list(id).subscribe(
      res => {
        this.testimonial = res;
        // this.totalItems = this.response.totalRecords;
        // this.event = this.response.data;

      }
    );
  }
  content: any;
}
