import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../cart/cart-home/model/cart.model';
import { Product } from '../model/product.model';







@Injectable({
  providedIn: 'root'
})
export class ProductdeatailService {

  private getProductByProductId:string;
  private addCartApi:string;

  constructor(private http:HttpClient) {
    this.getProductByProductId="http://localhost:8096/product/allproduct/";
    //this.addCartApi="http://localhost:8097/cart/add/items/";
  }

  getProductsByProductId(productId:string):Observable<Product>{
    return this.http.get<Product>(this.getProductByProductId+productId);
  }

  //  addItemsInCart(productId:string,quantity:number):Observable<Cart>{
  //   let userId=localStorage.getItem("userId");
  //   return this.http.post<Cart>(this.addCartApi+userId+"/"+productId+"/"+(1),{});
  //   }


}
