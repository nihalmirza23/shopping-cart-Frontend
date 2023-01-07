import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category-home/model/category.model';



@Injectable({
  providedIn: 'root'
})
export class Categoryservice {
/*
Fetch all dATA FRom get all category Api
*/

  private getCategoryApi: string;
  private getCategoryByNameApi:string;



  constructor(private http: HttpClient) {
    this.getCategoryApi="http://localhost:8096/category/categories";
    this.getCategoryByNameApi="http://localhost:8096/category/category/"
  }

  getAllCategories() : Observable<Category[]> {
     return this.http.get<Category[]>(this.getCategoryApi);
  }

  getCategoryByName(categoryName:string) :Observable<Category> {
    return this.http.get<Category>(this.getCategoryByNameApi+categoryName);

  }
}
