import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinceRoutingModule } from './province.module.routing';
import { ProvinceListComponent } from './province-list/province-list.component';

@NgModule({
  declarations: [
    ProvinceListComponent
  ],
  imports: [CommonModule, ProvinceRoutingModule],
})
export class ProvinceModule {}
