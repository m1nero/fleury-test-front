import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  urlAtual = '';
  urlSplit = [];
  numberAlerts: any = 0;

  constructor(
    private router: Router,
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.urlAtual = router.url.toString();
        this.urlSplit = this.urlAtual.split('/');
      }
    });
  }

  ngOnInit(): void {

  }
}
