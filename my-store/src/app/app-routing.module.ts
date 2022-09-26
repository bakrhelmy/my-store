import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"" , component:ProductComponent },
  {path:"item/:i", component: ProductItemComponent},
  {path:"cart", component: CartComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
