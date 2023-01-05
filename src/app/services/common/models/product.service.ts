import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import {Create_Product} from '../../../contracts/create_product'
import { ResourceLoader } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';
import { list_product } from 'src/app/contracts/list_product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }

  create(product:Create_Product,successCallBack?:any,errorCallBack?:(errorMessage:string)=>void){
    this.httpClientService.post({
      controller:"products"
    },product).subscribe(result=>{
      successCallBack();
    });
  }
//asdf 1:02:44
  async read(page:number=0,size:number=5,successCallBack?:()=>void, errorCallBack?:(errorMessage:string)=>void):Promise<list_product[]>{
    const promiseData:Promise<list_product[]>=this.httpClientService.get<list_product[]>({
      controller:"products"
    }).toPromise();
    promiseData.then(d=>successCallBack())
    .catch((errorResponce:HttpErrorResponse)=>
      console.error(errorResponce.message));
    return await promiseData;
  }
}
