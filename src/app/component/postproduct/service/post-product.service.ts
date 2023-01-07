import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class PostProductService {

  postProductApi:string;

  constructor(private http:HttpClient) {
    this.postProductApi ="http://localhost:8096/product/allproduct/";
  }

  postProduct(product:Product,categoryId:string):Observable<Product>{
    let userId = localStorage.getItem('userId');
    return this.http.post<Product>(this.postProductApi+userId+"/"+categoryId,product);
  }
}
