import { Component,OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, spinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent {
  constructor(spinner:NgxSpinnerService,private httpClientService:HttpClientService) {
    super(spinner);
  }

  ngOnInit():void{
    this.showSpinner(spinnerType.BallAtom);

    //contract using example. 'Product' object is a contract. The contract must have the same property as data which will come from service
    this.httpClientService.get<Product[]>({controller:"products"}).subscribe(data=>data.forEach(element => {
      console.log(element.name);
    }));
    //to add a data.
    // this.httpClientService.post({controller:"products"},
    // {
    //   name:"kadayif",
    //   stock:99999,
    //   price:99
    // }).subscribe();

    //to update a data by id.
    // this.httpClientService.put({controller:"products"},{
    //   id:"ccc00229-b981-4165-a8c7-18dca29fed63",
    //   name:"kagit",
    //   stock:15,
    //   price:333
    // }).subscribe();

    //to delete a data by id.
    // this.httpClientService.delete({controller:"products"},"ccc00229-b981-4165-a8c7-18dca29fed63").subscribe();

    //to get a data from different endpoint.
    // this.httpClientService.get({fullEndpoint:"https://jsonplaceholder.typicode.com/posts"}).subscribe(data=>console.log(data));
  }
}
