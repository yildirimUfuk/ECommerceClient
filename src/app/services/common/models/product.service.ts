import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import {Create_Product} from '../../../contracts/create_product'
import { ResourceLoader } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }
  create(product:Create_Product,successCallback?:any){
    this.httpClientService.post({
      controller:"products"
    },product).subscribe(result=>{
      successCallback();
    });
  }
}