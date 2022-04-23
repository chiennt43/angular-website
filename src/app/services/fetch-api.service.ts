import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpParams,
} from '@angular/common/http';
import { AppConfigurationService } from './app-configuration.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchApiService {
  baseRootApi: string = '';

  constructor(
    private appConfigurationService: AppConfigurationService,
    private http: HttpClient
  ) {
    this.baseRootApi = this.appConfigurationService.baseRootApi;
  }

  getUrl(url: string): string {
    if (!url) return this.baseRootApi;
    return this.baseRootApi + url;
  }

  get(url: string, params?: any): Observable<any> {
    const apiUrl = this.getUrl(url);
    return this.http.get(apiUrl, (Option = params));
  }
}
