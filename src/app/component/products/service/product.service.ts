import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private getProductByCategoryIdApi:string;
  private getAllProductsApi:string;

  constructor(private http: HttpClient) {
    this.getProductByCategoryIdApi="http://localhost:8096/product/allproduct/bycategoryid/";
    this.getAllProductsApi="http://localhost:8096/product/allproduct";
  }

  getProductByCategory(categoryId:String):Observable<Product[]>{
    return this.http.get<Product[]>(this.getProductByCategoryIdApi+categoryId);
  }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.getAllProductsApi);
  }

}
