import { Injectable } from '@angular/core';
import {HttpRequest, HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private http: HttpClient
  ) { }

  public getSurvey(input): Observable<{}> {
    return this.http.post('http://3.211.39.88:3000/survey', input);
  }

  public sendSurvey(input: any): Observable<{}> {
    return this.http.post('http://3.211.39.88:3000/surveyin', input);
  }
}
