import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mainUrl: string = environment.apiUrl;
  private url: string = 'user';

  constructor(
    private http: HttpClient,
    private router: Router) {
  }

  logIn(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.mainUrl + this.url, user)
      .pipe(
        map((result) => {
          sessionStorage.setItem('token', result + '');
          if (result) {
            this.router.navigate(['/dashboard']);
          }
          return result;
        })
      );
  }

  canAuth(): boolean {
    if (sessionStorage.getItem('token')) {
      return sessionStorage.getItem('token') === 'true';
    }
  }
}
