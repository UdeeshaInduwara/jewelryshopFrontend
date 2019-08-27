import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {JewelryMakingOrder} from '../models/jewelry-making-order.model';

@Injectable({
  providedIn: 'root'
})
export class JewelryMakingOrderService {
  private mainUrl: string = environment.apiUrl;
  private url: string = 'jewelryMakingOrder';

  constructor(private http: HttpClient) {
  }

  placeOrder(jewelryMakingOrder: JewelryMakingOrder): Observable<boolean> {
    return this.http.post<boolean>(this.mainUrl + this.url, jewelryMakingOrder);
  }

  getAllJewelryMakingOrders(): Observable<Array<JewelryMakingOrder>> {
    return this.http.get<Array<JewelryMakingOrder>>(this.mainUrl + this.url);
  }
}
