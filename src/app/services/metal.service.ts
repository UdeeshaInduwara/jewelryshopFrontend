import { Metal } from './../models/metal.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetalService {
  private url = 'metal';
  constructor(private http: HttpClient) {
  }

  getAllMetal(): Observable<Array<Metal>> {
    return this.http.get<Array<Metal>>(environment.apiUrl + this.url);
  }
}
