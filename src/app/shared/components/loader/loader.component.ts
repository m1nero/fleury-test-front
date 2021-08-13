import { Component, OnInit } from '@angular/core';
import {LoaderService} from '@shared/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent {
  public loading;
  constructor(public loaderService: LoaderService) {
  this.loading = this.loaderService.isLoading;
  }



}
