import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  constructor(private http: HttpClient) { }

  // api_uri: string = environment.API_KEY;

  // getContacts(userId: any) {
  //   return this.http.get(`${this.api_uri}/contacts?userId=${userId}`);
  // }
}
