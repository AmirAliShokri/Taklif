import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductModel } from '../Shared/product.model';
import { ProductService } from '../Shared/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers:[NgbModalConfig , NgbModal]
})
export class ProductListComponent implements OnInit {

  productForm : FormGroup;
  productList: ProductModel[] = [
    {
      Code : 1,
      Name : "دسته بازی",
      Price : 10000,
      IsAvailable : true,
      count:3
    },
    {
      Code : 2,
      Name : " کنسول",
      Price : 4000000,
      IsAvailable : false,
      count:0
    }
  ];
  constructor(
    private service: ProductService,
    private router: Router,
    private modalService: NgbModal,
    config: NgbModalConfig) {

     }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      Code : new FormControl('', Validators.required),
      Name : new FormControl('', Validators.required),
      Price : new FormControl('', Validators.required),
      count : new FormControl('', Validators.required),
    });
  }
  Add(content){
    this.modalService.open(content).result.then((result) => {
     console.log(result);
    });
  }
  Del(){
    this.productList = [];
  }
  Pay(code){
    this.router.navigate(['/product-pay', code]);
  }
  onSubmit(form: FormGroup){
    this.productList.push({
      Code : form.value.Code,
      Name : form.value.Name,
      Price : form.value.Price,
      count : form.value.count,
      IsAvailable : form.value.count === 0 ? false : true
    });
    this.modalService.dismissAll();
  }

}
