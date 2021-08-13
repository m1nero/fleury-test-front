import { IEnvironment } from '@environments/ienvironment';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EnvironmentService implements IEnvironment {
  get production() {
    return environment.production;
  }

  get defaultTitle() {
    return environment.defaultTitle;
  }

  get apiUrl() {
    return environment.apiUrl;
  }

  get retryDelay() {
    return environment.retryDelay;
  }

  get retryScalingFactor() {
    return environment.retryScalingFactor;
  }

  get retryMaxAttempt() {
    return environment.retryMaxAttempt;
  }

  constructor() {}
}