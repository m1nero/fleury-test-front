import { IEnvironment } from '@environments/ienvironment';

const apiUrl = 'http://localhost:3000/';
const retryDelay = 1000;
const retryMaxAttempt = 0;
const retryScalingFactor = 0;

export const environment: IEnvironment = {
  production: false,
  defaultTitle: 'TesteCRUD',
  apiUrl,
  retryDelay,
  retryMaxAttempt,
  retryScalingFactor
};
