import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinceRoutingModule } from './province.module.routing';
import { ProvinceListComponent } from './province-list/province-list.component';
import { ProvinceSelectModule } from './province-select/province-select.module';

@NgModule({
  declarations: [ProvinceListComponent],
  imports: [CommonModule, ProvinceRoutingModule],
})
export class ProvinceModule {}
