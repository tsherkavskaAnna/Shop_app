import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoDataService {

  constructor( private httpClient: HttpClient) { }

  getDemo () : Observable<Object> {
    return this.httpClient.get("http://localhost:8050/articles/service");
  }
}
