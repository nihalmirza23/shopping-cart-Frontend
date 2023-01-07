import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { wallet } from '../model/wallet.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



@Injectable({
  providedIn: 'root'
})
export class WalletService {

  getWalletApi:string;
  createWalletApi:string;
  addMoneyApi:string;
  payByWalletApi:string;

  constructor(private http:HttpClient) {
    this.getWalletApi="http://localhost:8099/api/wallet/user/";
    this.createWalletApi="http://localhost:8099/api/wallet/";
    this.addMoneyApi="http://localhost:8099/api/add/wallet/";
    this.payByWalletApi="http://localhost:8099/api/pay/byWallet/";


   }

   getWallet():Observable<wallet>{
    let userId = localStorage.getItem('userId');
    return this.http.get<wallet>(this.getWalletApi+userId);

   }

   createwallet():Observable<wallet>{
    let userId = localStorage.getItem('userId');
    return this.http.post<wallet>(this.createWalletApi+userId,{});
   }

   addMoney(walletId:string,amount:number):Observable<wallet>{
    return this.http.post<wallet>(this.addMoneyApi+walletId+"/"+amount,{});
   }

   createOrder(order:any):Observable<any> {
    return this.http.post("http://localhost:8080/pg/createOrder", {
      customerName: order.name,
      email: order.email,
      phoneNumber: order.phone,
      amount: order.amount
    }, httpOptions);
   }

   payBywallet(amount:number,walletId:string){
    return this.http.get<wallet>(this.payByWalletApi+amount+"/"+walletId,{});
   }


}
