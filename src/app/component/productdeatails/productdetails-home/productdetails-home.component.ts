import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';









import { ProductdeatailService } from '../service/productdeatail.service';

@Component({
  selector: 'app-productdetails-home',
  templateUrl: './productdetails-home.component.html',
  styleUrls: ['./productdetails-home.component.css']
})
export class ProductdetailsHomeComponent implements OnInit {

  products:Product[];
  product:Product;

  errorMsg:string;
  productId:string;
  userId:string;


  constructor(private actRoute:ActivatedRoute,private productdeatailService:ProductdeatailService) { }

  ngOnInit(): void {
    this.userId=localStorage.getItem("userId");

    this.actRoute.params.subscribe(
      params=>{
        this.productId=params['productId'];
        console.log(this.productId)
        this.productdeatailService.getProductsByProductId(params['productId']).subscribe(data=>{
          this.product=data;
        },error=>{
          this.errorMsg='could not load product details';

        });

      }
    );


  }


  // postProductinCart(){
  //   this.productdeatailService.addItemsInCart(this.productId,1).subscribe(data=>{
  //     console.log(data);
  //   });
  // }



}
