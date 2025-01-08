import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ARMY PUBLIC SCHOOL, KIRKEE | ';
  showNavbarAndFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Current URL:', event.url);
        console.log('Show Navbar:', this.showNavbarAndFooter);
      }
    });
  }
}