import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
// This will allow to transform result from API to JSON data.
import { map } from 'rxjs/operators';
import { Post } from './post'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  result:any;
  
  constructor(
    private _http: Http
  ) { }

  getPosts() {
    return this._http.get('/api/posts')
      .pipe(map(result => result.json()))
  }

  getPost(id) {
    return this._http.get('/api/details/' + id)
      .pipe(map(result => result.json()))
  }

  insertPost(post: Post) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/posts', JSON.stringify(post), options).pipe(map(result => result.json()))
  }
}
