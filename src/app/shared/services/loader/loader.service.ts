import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public isLoading: boolean;

  show() {
    this.isLoading = true;
  }

  hide() {
    this.isLoading = false;
  }
}