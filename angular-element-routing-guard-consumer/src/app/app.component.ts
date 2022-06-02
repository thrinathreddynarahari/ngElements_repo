import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'jasmin-router';
  constructor(private router: Router) { }
  ngOnInit(): void {
    
      this.handleNavigation()
    
  }

  public handleNavigation() {
    this.router.events.subscribe((val: any) => {
      if (val instanceof NavigationStart) {
        if (
          (val.id === 1 && val.navigationTrigger === 'imperative') ||
          val.navigationTrigger === 'popstate'
        ) {
          // Get URL from current Route
          const fullRouteUrl = val.url;
          // Remove outlet from url
          const routeWithoutOutlet = fullRouteUrl.replace(/ *\([^)]*\) */g, '');
          console.log(fullRouteUrl);
          console.log(routeWithoutOutlet);
          // Navigate to host route and replace location history with fullRouteUrl
          this.router.navigateByUrl(routeWithoutOutlet).then(() => {
            window.history.pushState({}, 'null', fullRouteUrl);
          });
        }
      }
    });
  }

}
