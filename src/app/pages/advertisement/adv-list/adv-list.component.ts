import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/bean/advertisement';
import { ResponseData } from 'src/app/bean/responseData';
import { SuccessResponse } from 'src/app/bean/successResponse';
import { AdvertisementService } from 'src/app/service/advertisement/advertisement.service';

@Component({
  selector: 'app-adv-list',
  templateUrl: './adv-list.component.html',
  styleUrls: ['./adv-list.component.css']
})
export class AdvListComponent implements OnInit {

  maxSize = 5;
  totalItems: number;
  currentPage = 1;
  start: number = 0;
  advertisement: Advertisement[];
  responseMessage: string;
successResponse:  SuccessResponse;
responses:any;


  response: ResponseData;

  constructor(public advertService:AdvertisementService,
    ){

  }
  ngOnInit(): void {
    this.list(this.start);
  }

  list(id:any) {
    this.advertService.list(id).subscribe(
      res => {
        this.advertisement = res;
        // this.totalItems = this.response.totalRecords;
        // this.event = this.response.data;

      }
    );
  }

}
