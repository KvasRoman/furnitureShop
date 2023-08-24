import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './main/defaultUser/home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NumberWithCommasPipe } from './pipes/numberWithCommas.pipe';
import { HomeSilderComponent } from './main/defaultUser/home/home-slider/home-slider.component';
import { ShopComponent } from './main/defaultUser/shop/shop.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationPipe } from './pipes/pagination.pipe';
import { ProductComponent } from './main/defaultUser/product/product.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CartDialog } from './header/cart-dialog/cart-dialog.component';
import { CartComponent } from './main/defaultUser/cart/cart.component';
import { MatTableModule } from '@angular/material/table';
import { CheckoutComponent } from './main/defaultUser/checkout/checkout.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './main/defaultUser/contact/contact.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductComparisonComponent } from './main/defaultUser/product-comparison/product-comparison.component';
import { ComparisonSectionPipe } from './pipes/comparisonSection.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    NumberWithCommasPipe,
    PaginationPipe,
    HomeSilderComponent,
    ShopComponent,
    ProductComponent,
    CartDialog,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    ProductComparisonComponent,
    ComparisonSectionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatAutocompleteModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
