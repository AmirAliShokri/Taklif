import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private client: HttpClient) {}

  private getUrl(resourceName: string) {
    return `${environment.baseUrl}${resourceName}`;
  }

  public getAll<TResonse>(resourceName: string): Observable<TResonse> {
    return this.client.get<TResonse>(this.getUrl(resourceName));
  }
}
