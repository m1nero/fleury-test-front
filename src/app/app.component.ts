import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  fullUrl = '';
  simpleUrl = '';

  constructor(
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.fullUrl = this.location.path();
    this.simpleUrl = this.fullUrl.toString().slice(0, -36);
  }
}