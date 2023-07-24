import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/defaultUser/home/home.component';
import { ShopComponent } from './main/defaultUser/shop/shop.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
