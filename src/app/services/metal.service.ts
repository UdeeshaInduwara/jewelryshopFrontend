import {Metal} from './../models/metal.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {UpdateMetal} from '../models/update-metal.model';

@Injectable({
  providedIn: 'root'
})
export class MetalService {
  private mainUrl: string = environment.apiUrl;
  private url: string = 'metal';

  constructor(private http: HttpClient) {
  }

  getAllMetal(): Observable<Array<Metal>> {
    return this.http.get<Array<Metal>>(this.mainUrl + this.url);
  }

  saveMetal(metal: Metal): Observable<boolean> {
    return this.http.post<boolean>(this.mainUrl + this.url, metal);
  }

  deleteMetal(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.mainUrl + this.url + '/' + id);
  }

  updateMetal(data: UpdateMetal): Observable<boolean> {
    return this.http.put<boolean>(this.mainUrl + this.url, data);
  }
}
