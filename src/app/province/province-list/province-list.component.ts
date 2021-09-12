import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProvinceService } from '../Shared/province.service';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.scss'],
})
export class ProvinceListComponent implements OnInit {
  provinces = [];
  constructor(
    private service: ProvinceService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.service.getAll().subscribe((res) => {
      this.provinces = [...this.provinces, ...res].splice(1, 31);
    });
  }
}
