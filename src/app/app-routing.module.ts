import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { InfoProductComponent } from './info-product/info-product.component';

const routes: Routes = [
  {path: 'home' , component: NavComponent},
  {path: ':id' , component:ProductComponent},
  {path: 'detail/:id' , component:InfoProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
