import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gem } from '../models/gem.model';

@Injectable({
  providedIn: 'root'
})
export class GemService {
  private mainUrl: string = environment.apiUrl;
  private url: string = 'gem';
  constructor(private http: HttpClient) {
  }

  getAllGem(): Observable<Array<Gem>> {
    return this.http.get<Array<Gem>>(this.mainUrl + this.url);
  }

  saveGem(gem: Gem): Observable<boolean> {
    return this.http.post<boolean>(this.mainUrl + this.url, gem);
  }

  deleteGem(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.mainUrl + this.url + '/' + id);
  }
}
