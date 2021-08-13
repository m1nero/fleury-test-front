export interface IEnvironment {
  production: boolean;
  defaultTitle: string;
  apiUrl: string;
  retryDelay: number;
  retryMaxAttempt: number;
  retryScalingFactor: number;
}
