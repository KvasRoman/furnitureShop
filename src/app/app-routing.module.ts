import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/defaultUser/home/home.component';
import { ShopComponent } from './main/defaultUser/shop/shop.component';
import { ProductComponent } from './main/defaultUser/product/product.component';
import { CartComponent } from './main/defaultUser/cart/cart.component';

const routes: Routes = [
  {path: 'Shop/Product/:id', component: ProductComponent},
  {path: 'Shop', component: ShopComponent},
  {path: 'Cart', component: CartComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
