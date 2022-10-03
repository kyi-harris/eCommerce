import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'category/:id', component: ProductListComponent },
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {path: '**', redirectTo: '/products', pathMatch: 'full'},


  {path: 'product/:id', component: ProductListComponent},
  {path: 'product/:id', component: ProductListComponent},
  {path: 'product/:id', component: ProductListComponent},


];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
