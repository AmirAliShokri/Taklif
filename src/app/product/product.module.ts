import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductPayComponent } from './product-pay/product-pay.component';
import { ProductRoutingModule } from './product.module.routing';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductPayComponent,
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ProductCreateComponent
  ]
})
export class ProductModule { }
