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

  public getSurvey(): Observable<{}>{
    return of({
      randomOutfit: {
        Tops: [
          {src: 'https://drive.google.com/uc?authuser=0&id=104nclYRM9yCxWWeAtXR9ynv9bB2UTF16&export=download'}
        ],
        Bottoms: [
          {src: 'https://drive.google.com/uc?authuser=0&id=1OerxKsVdxyMWbWsn5aEwFwsjpn0eIevF&export=download'}
        ]
      },
      randomWardrobe: {
        Tops: [
          {src: 'https://drive.google.com/uc?authuser=0&id=104nclYRM9yCxWWeAtXR9ynv9bB2UTF16&export=download'},
          {src: 'https://drive.google.com/uc?authuser=0&id=1OerxKsVdxyMWbWsn5aEwFwsjpn0eIevF&export=download'}
        ],
        Bottoms: [
          {src: 'https://drive.google.com/uc?authuser=0&id=1OerxKsVdxyMWbWsn5aEwFwsjpn0eIevF&export=download'},
          {src: 'https://drive.google.com/uc?authuser=0&id=104nclYRM9yCxWWeAtXR9ynv9bB2UTF16&export=download'}

        ]
      },
      factors: {
        weather: 1,
        temperature: 1,
        formality: 1,
        season: 1
      }
    });
  }
}
