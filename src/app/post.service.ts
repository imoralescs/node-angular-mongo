import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// This will allow to transform result from API to JSON data.
// import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  result:any;
  
  constructor(
    private _http: Http
  ) { }

  getPosts() {
    // return this._http.get('/api/posts')
      // .map(result => this.result = result.json())
    return this._http.get('/api/posts')
      .pipe(map(res => res.json()))
  }
}
