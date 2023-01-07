import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartHomeComponent } from './component/cart/cart-home/cart-home.component';
import { CategoryHomeComponent } from './component/category/category-home/category-home.component';
import { LoginHomeComponent } from './component/login/login-home/login-home.component';
import { AuthGuardService } from './component/login/service/auth-guard.service';
import { MyorderHomeComponent } from './component/myorder/myorder-home/myorder-home.component';
import { OrderHomeComponent } from './component/order/order-home/order-home.component';
import { PostproductHomeComponent } from './component/postproduct/postproduct-home/postproduct-home.component';
import { ProductdetailsHomeComponent } from './component/productdeatails/productdetails-home/productdetails-home.component';
import { ProductHomeComponent } from './component/products/product-home/product-home.component';
import { ProfileHomeComponent } from './component/profile/profile-home/profile-home.component';
import { RagisterHomeComponent } from './component/register/ragister-home/ragister-home.component';
import { WalletHomeComponent } from './component/wallet/wallet-home/wallet-home.component';

const routes: Routes = [

  {path:'', component: CategoryHomeComponent},
  {path:'product/:categoryId', component: ProductHomeComponent},
  {path:'productdetails/:productId', component: ProductdetailsHomeComponent},
  {path:'user/register', component: RagisterHomeComponent},
  {path:'login', component: LoginHomeComponent},
  {path:'cart/add/items/:userId/:productId/:quantity', component: CartHomeComponent,canActivate: [AuthGuardService]},
  {path:'cart', component: CartHomeComponent,canActivate: [AuthGuardService]},
  {path:'cart/:userId', component: CartHomeComponent,canActivate: [AuthGuardService]},
  {path:'profile',component:ProfileHomeComponent},//canActivate: [AuthGuardService]},
  {path:'order/:userId',component:OrderHomeComponent,canActivate:[AuthGuardService]},
  {path:'myorders',component:MyorderHomeComponent,canActivate:[AuthGuardService]},
  {path:'postproduct',component:PostproductHomeComponent},
  {path:'wallet',component:WalletHomeComponent,canActivate:[AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
