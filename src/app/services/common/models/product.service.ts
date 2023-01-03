import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import {Create_Product} from '../../../contracts/create_product'
import { ResourceLoader } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }
  create(product:Create_Product,successCallBack?:any,errorCallBack?:any){
    this.httpClientService.post({
      controller:"products"
    },product).subscribe(result=>{
      successCallBack();
    },
    (errorResponce:HttpErrorResponse)=>{
      //_error is an array contains key and value. Key type is a string and value type is a string array.
      var _error:Array<{key:string,value:Array<string>}>=errorResponce.error;
      let message="";
      _error.forEach((v,index)=>{
        v.value.forEach((_v,_index)=>{
          message+=`${_v}<br>`;
          });
        });
        errorCallBack(message);
    });
  }
}
