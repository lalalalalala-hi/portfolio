import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navfooter',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './navfooter.component.html',
  styleUrl: './navfooter.component.css',
})
export class NavfooterComponent implements OnInit {
  currentRoute: string;

  constructor(public router: Router) {
    this.currentRoute = '';
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url;
        window.scrollTo(0, 0);
      });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }
}
