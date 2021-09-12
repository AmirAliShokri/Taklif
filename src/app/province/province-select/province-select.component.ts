import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProvinceService } from '../Shared/province.service';

@Component({
  selector: 'app-province-select',
  templateUrl: './province-select.component.html',
  styleUrls: ['./province-select.component.scss'],
})
export class ProvinceSelectComponent implements OnInit {
  @Input() selectedProvince: number;
  @Output() selectedProvinceChange = new EventEmitter<number>();
  province = [];

  constructor(private service: ProvinceService) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.service.getAll().subscribe((res) => {
      this.province = [...this.province, ...res].splice(1, 31);
    });
  }

  addToSelected(event) {
    this.selectedProvinceChange.emit(event.Id);
  }
}
