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
    return of({
      message: 'Generated survey data',
      data: {
        wardrobe: {
          top: [
            {
              imageSource: 'https://s3.amazonaws.com/data.outfittr.net/tops/aa8141e660639dd79a5a8a0c240774168fdbdc5e.jpg'
            },
            {
              imageSource: 'https://s3.amazonaws.com/data.outfittr.net/tops/24a6a734ba6fee8f6f5d6fe6d208de8ecdfd9b14.jpg'
            },
            {
              imageSource: 'https://s3.amazonaws.com/data.outfittr.net/tops/6286aac8456ac6107328fc79a49d3ad084bb6d86.jpg'
            },
            {
              imageSource: 'https://s3.amazonaws.com/data.outfittr.net/tops/71c34b07e0c8badd2b1ff48fd976896988941d2d.jpg'
            },
            {
              imageSource: 'https://s3.amazonaws.com/data.outfittr.net/tops/cf35073353829f6c0a9d7d8bce4eb68f01c8506e.jpg'
            }
          ],
          bottom: [
            {
              imageSource: 'https://s3.amazonaws.com/data.outfittr.net/bottoms/e1a9cd5e76a26c37983b340ee09f0c8d6b84996c.jpg'
            },
            {
              imageSource: 'https://s3.amazonaws.com/data.outfittr.net/bottoms/11ddaeaa6edd1c473ca2f1c05b777c7858026e29.jpg'
            },
            {
              imageSource: 'https://s3.amazonaws.com/data.outfittr.net/bottoms/f55ed58c914e97c8d200bf20c5f82fc5e66f4919.jpg'
            },
            {
              imageSource: 'https://s3.amazonaws.com/data.outfittr.net/bottoms/4d328cbe8d84c626d2f69982988db6de195c33fe.jpg'
            },
            {
              imageSource: 'https://s3.amazonaws.com/data.outfittr.net/bottoms/15ca8a1946fc9f25ce730db4334bf645ecaffec1.jpg'
            }
          ]
        },
        outfit: {
          top: [
            {
              imageSource: 'https://s3.amazonaws.com/data.outfittr.net/tops/f68d68899191a30325731e7343f75222e1d2bd5e.jpg'
            }
          ],
          bottom: [
            {
              imageSource: 'https://s3.amazonaws.com/data.outfittr.net/bottoms/d27cbb9bf73d9238fad2782fb6fe19be8e59aff0.jpg'
            }
          ]
        }
      },
      status: 200
    });
    // return this.http.get(`http://3.211.39.88:3000/api/surveys/generate?tops=${input.top}&bottoms=${input.bottom}`);
  }

  public sendSurvey(input: any): Observable<{}> {
    return this.http.post('http://3.211.39.88:3000/api/surveys', input);
  }
}
