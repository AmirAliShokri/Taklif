import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvinceSelectComponent } from './province-select.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ProvinceSelectComponent],
  imports: [CommonModule, FormsModule, NgSelectModule],
})
export class ProvinceSelectModule {}
