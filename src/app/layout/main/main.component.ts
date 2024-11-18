import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private router: Router) { }
  showBreadCrumb: boolean = true;
  ngOnInit(): void {
    this.router.events.pipe(
    ).subscribe(() => {
      const url = this.router.url
      if (url == '/dashboard') {
        this.showBreadCrumb = false
      }
      else { this.showBreadCrumb = true }
    });

  }
}
