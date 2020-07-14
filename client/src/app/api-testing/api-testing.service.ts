import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiTestingService {

  constructor(private http: HttpClient) { }

  get(queryString: string) {
    return this.http.get(queryString);
  }

  put(queryString: string, requestPayload: any) {
    return this.http.put(queryString, requestPayload);
  }

  post(queryString: string,  requestPayload: any) {
    return this.http.post(queryString, requestPayload);
  }

  delete(queryString: string) {
    return this.http.delete(queryString);
  }
}
