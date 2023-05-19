import axios, { AxiosError, AxiosInstance,AxiosRequestConfig, AxiosResponse } from 'axios';

export const enum EjectType {
  Checker = 'checker',
  Request = 'request',
  Response = 'response',
}

export interface AjaxConfig {
	interceptRequest?: (config: AxiosRequestConfig) => AxiosRequestConfig;
	interceptResponse?: (response: AxiosResponse) => AxiosResponse;
	interceptRejected?: (error: AxiosError, eject: EjectType) => unknown;
}

export class Ajax {
		
	constructor(config: unknown) {
	}
}