import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '@shared/models/item.model';
import {retryWithDelay} from 'rxjs-retry-delay';
import {EnvironmentService} from '@app/environment.service';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private httpClient: HttpClient,
    private environment: EnvironmentService
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getItems(): Observable<Item> {
    return this.httpClient.get<Item>(this.environment.apiUrl + 'item').pipe(
      retryWithDelay({
        delay: this.environment.retryDelay,
        maxRetryAttempts: this.environment.retryMaxAttempt,
        scalingFactor: this.environment.retryScalingFactor
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
