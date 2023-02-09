import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchGifService {
  constructor(private http: HttpClient) { }

  api_uri: string = environment.API_URI;
  api_key: string = environment.API_KEY;

  searchGif(keyword: any) {
    return this.http.get(`${this.api_uri}/search?api_key=${this.api_key}&q=${keyword}&limit=10`);
  }

  trendingGifs() {
    return this.http.get(`${this.api_uri}/trending?api_key=${this.api_key}&limit=40`);
  }
}
