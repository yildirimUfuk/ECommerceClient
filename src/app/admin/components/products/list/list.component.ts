import { AfterViewInit, Component,OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, spinnerType } from 'src/app/base/base.component';
import { list_product } from 'src/app/contracts/list_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent {
  displayedColumns: string[] = ['name', 'stock', 'price','creationDate','updatedDate'];
  dataSource:MatTableDataSource<list_product> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(spinner:NgxSpinnerService,private productService:ProductService,private alertifyService:AlertifyService) {
    super(spinner);
  }

  async getProduct(){
    this.showSpinner(spinnerType.BallAtom);
    const allProductList:list_product[]= await this.productService.read(0,5,()=>this.hideSpinner(spinnerType.BallAtom),errorMessage=>
    this.alertifyService.Message(errorMessage,{
      dismissOthers:true,
      position:Position.TopRight,
      messageType:MessageType.Error,
    }));
    this.dataSource=new MatTableDataSource<list_product>(allProductList);

    this.dataSource.paginator = this.paginator;
  }
  
  async ngOnInit(){
    this.getProduct();
  }
}
