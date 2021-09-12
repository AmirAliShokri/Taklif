import { Injectable } from '@angular/core';
import { RestService } from 'src/app/core/Service/rest.service';

@Injectable({
  providedIn: 'root',
})
export class ProvinceService {
  private resourceName = 'Province';
  constructor(private restService: RestService) {}

  public getAll(): any {
    this.restService.getAll(this.resourceName).subscribe((res) => {
      return res;
    });
  }
}
