import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ShortenUrlResponse} from "./interfaces/index.interfaces";

@Injectable()
export class AppService {
  private apiUrl = 'https://api.shrtco.de/v2/shorten?url=';

  constructor(private http: HttpClient) {}

  getItems(url: string): Observable<ShortenUrlResponse> {

    return this.http.get<ShortenUrlResponse>(`${this.apiUrl}${url}`);
  }
}
