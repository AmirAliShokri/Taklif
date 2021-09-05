import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodeActionCommand } from 'typescript';

@Component({
  selector: 'app-product-pay',
  templateUrl: './product-pay.component.html',
  styleUrls: ['./product-pay.component.scss']
})
export class ProductPayComponent implements OnInit {

  code: string;
  constructor(private route: ActivatedRoute) {
    this.code = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.code = this.route.snapshot.paramMap.get('id');
  }

}
