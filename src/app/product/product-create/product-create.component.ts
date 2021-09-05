import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModel } from '../Shared/product.model';
import { ProductService } from '../Shared/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;
  constructor(private service: ProductService,private modalService: NgbModal) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      Code : new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      Name : new FormControl('', Validators.required),
      Price : new FormControl('', Validators.required),
      count : new FormControl('', Validators.required),
    });
  }

  OnSubmit(form: FormGroup){
    let model = new ProductModel();
    model.Code = form.value.Code;
    model.Name = form.value.Name;
    model.Price = form.value.Price;
    model.count = form.value.count;
    if (form.value.count == 0){
      model.IsAvailable = false;
    }else{
      model.IsAvailable = true;
    }
    this.modalService.dismissAll();
  }

}
