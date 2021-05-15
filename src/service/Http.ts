import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/BaseUrl";

export default class Http {
  private baseURL: any;
  private instance: AxiosInstance;
  constructor() {
    this.baseURL = BASE_URL;
    this.instance = axios;
  }

  public get<T, R = AxiosResponse<T>>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.get(`${this.baseURL}${endpoint}`, config);
  }

  public post<T, B, R = AxiosResponse<T>>(
    endpoint: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.post(`${this.baseURL}${endpoint}`, data, config);
  }

  public put<T, B, R = AxiosResponse<T>>(
    endpoint: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.put(`${this.baseURL}${endpoint}`, data, config);
  }

  public patch<T, B = {}, R = AxiosResponse<T>>(
    endpoint: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.patch(`${this.baseURL}${endpoint}`, data, config);
  }
  public delete<T, B = {}, R = AxiosResponse<T>>(
    endpoint: string,
    data?: B
  ): Promise<R> {
    return this.instance.delete(`${this.baseURL}${endpoint}`, data);
  }
}
