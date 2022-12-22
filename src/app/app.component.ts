import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any // to use jquery

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerceClient';
  constructor(private toastrService:CustomToastrService){
    toastrService.message("abuzer","hola",{
      messageType:ToastrMessageType.Info,
      positon:ToastrPosition.BottomLeft
    });
  }
}