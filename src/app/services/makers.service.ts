import { Makers } from './../models/makers.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MakersService {
  private mainUrl: string = environment.apiUrl;
  private url: string = 'jewelryMaker';
  constructor(private http: HttpClient) {
  }

  getAllMakers(): Observable<Array<Makers>> {
    return this.http.get<Array<Makers>>(this.mainUrl + this.url);
  }

  saveMakers(makers: Makers): Observable<boolean> {
    return this.http.post<boolean>(this.mainUrl + this.url, makers);
  }

  deleteMakers(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.mainUrl + this.url + '/' + id);
  }
}
