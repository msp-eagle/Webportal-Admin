import { Component, Input, OnInit, } from '@angular/core';
import * as $ from 'jquery';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

    // avoid having to double-click to toggle Bootstrap dropdown
    $('li a').click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      this.click()
      // console.log("Checkkkkkkk")
      return false;
    });

  }

}
