import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gem } from '../models/gem.model';

@Injectable({
  providedIn: 'root'
})
export class GemService {
  private url = 'gem';
  constructor(private http: HttpClient) {
  }

  getAllGem(): Observable<Array<Gem>> {
    return this.http.get<Array<Gem>>(environment.apiUrl + this.url);
  }
}
