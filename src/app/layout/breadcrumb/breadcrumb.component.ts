import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { sourceCode } from '@syncfusion/ej2-angular-richtexteditor';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      
    ).subscribe(() => {
      console.log("check...")
      this.breadcrumbs = this.createBreadcrumbs(this.route.root);
    });
   
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Array<{ label: string, url: string }> = []): Array<{ label: string, url: string }> {
    const children: ActivatedRoute[] = route.children;

    // Ensure "Home" is added only once at the start
    if (breadcrumbs.length === 0) {
      breadcrumbs.push({ label: 'Dashboard', url: '/' });
    }

    
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data['breadcrumb'];
      if (label !== undefined) {
        if (!breadcrumbs.some(crumb => crumb.label === label && crumb.url === url)) {
          // Only push if the breadcrumb with the same label and URL doesn't already exist
          breadcrumbs.push({ label, url });
        }
      } 
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
