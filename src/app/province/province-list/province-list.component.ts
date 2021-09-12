import { Component, OnInit } from '@angular/core';
import { ProvinceService } from '../Shared/province.service';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.scss'],
})
export class ProvinceListComponent implements OnInit {
  provinces = [];
  constructor(private service: ProvinceService) {}

  ngOnInit(): void {
    this.provinces = this.service.getAll();
  }
}
