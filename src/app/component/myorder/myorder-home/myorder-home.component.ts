import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order.model';

import { MyorderServiceService } from '../service/myorderservice.service';

@Component({
  selector: 'app-myorder-home',
  templateUrl: './myorder-home.component.html',
  styleUrls: ['./myorder-home.component.css']
})
export class MyorderHomeComponent implements OnInit {

  order:Order[];

  constructor(private myOrderService:MyorderServiceService) { }

  ngOnInit(): void {
    this.myOrderService.getOrders().subscribe(data=>{
      this.order= data;
      console.log(data);
    },
    error=>{
      console.log(error);
      console.log("orders error");
    }

    );
  }

}
