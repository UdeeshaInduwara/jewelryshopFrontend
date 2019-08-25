import { Makers } from './../models/makers.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MakersService {
  private url = 'jewelryMakers';
  constructor(private http: HttpClient) {
  }

  getAllMakers(): Observable<Array<Makers>> {
    return this.http.get<Array<Makers>>(environment.apiUrl + this.url);
  }
}
