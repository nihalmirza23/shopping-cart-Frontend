import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../order/model/order.model';

@Injectable({
  providedIn: 'root'
})
export class MyorderServiceService {

  getOrdersApi:string;


  constructor(private http:HttpClient) {
    this.getOrdersApi="http://localhost:8098/api/allorder/byuser/";

   }

   getOrders():Observable<Order[]>{
    let userId = localStorage.getItem('userId');
    return this.http.get<Order[]>(this.getOrdersApi+userId);
   }
}

