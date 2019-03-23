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

  public static getSurvey(): Observable<{}> {
    return of({
      randomOutfit: {
        Tops: [
          {
            src: 'https://drive.google.com/uc?authuser=0&id=104nclYRM9yCxWWeAtXR9ynv9bB2UTF16&export=download',
            filename: 'filename.pic'
          }
        ],
        Bottoms: [
          {
            src: 'https://drive.google.com/uc?authuser=0&id=1OerxKsVdxyMWbWsn5aEwFwsjpn0eIevF&export=download',
            filename: 'bottomname.pic'
          }
        ]
      },
      randomWardrobe: {
        Tops: [
          {
            src: 'https://drive.google.com/uc?authuser=0&id=104nclYRM9yCxWWeAtXR9ynv9bB2UTF16&export=download',
            filename: 'topname.pic'
          },
          {
            src: 'https://drive.google.com/uc?authuser=0&id=1OerxKsVdxyMWbWsn5aEwFwsjpn0eIevF&export=download',
            filename: 'topname2.pic'
          }
        ],
        Bottoms: [
          {
            src: 'https://drive.google.com/uc?authuser=0&id=1OerxKsVdxyMWbWsn5aEwFwsjpn0eIevF&export=download',
            filename: 'bottomname3.pic'
          },
          {
            src: 'https://drive.google.com/uc?authuser=0&id=104nclYRM9yCxWWeAtXR9ynv9bB2UTF16&export=download',
            filename: 'bottomname33.pic'
          }

        ]
      }
    });
  }

  public static sendSurvey(surveySubmission: any): Observable<{}> {
    return of({
      status: 'success',
      sent: surveySubmission
    });
  }
}
