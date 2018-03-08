import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';



// bellow this is iterrating over 
@Component({
  selector: 'app-breadcrumbs',
  template: `

  <h6>Profile</h6>`
})
export class AppBreadcrumbsComponent {
  // breadcrumbs: Array<Object>;
  // constructor(
  //   private router: Router,
  //   private route: ActivatedRoute
  // ) {
  //   this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event) => {
  //     // empty array is set to be filled with items, these or the home/dashboard items in the top-middle of the page
  //     this.breadcrumbs = [];

  //     let currentRoute = this.route.root,
  //     url = '';
  //     do {
  //       const childrenRoutes = currentRoute.children;
  //       currentRoute = null;
  //       // tslint:disable-next-line:no-shadowed-variable
  //       childrenRoutes.forEach(route => {
  //         if (route.outlet === 'primary') {
  //           const routeSnapshot = route.snapshot;
  //           url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
  //           console.log(route.outlet)
  //           this.breadcrumbs.push({
  //             label: route.snapshot.data,
  //             url:   url
  //           });
  //           currentRoute = route;
  //         }
  //       });
  //     } while (currentRoute);
  //   });
  // }
}
