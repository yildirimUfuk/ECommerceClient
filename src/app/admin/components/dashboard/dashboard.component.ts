import { Component,OnInit } from '@angular/core';
import { AlertifyOptions, AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private alertify:AlertifyService){}
  
  ngOnInit():void{
    
  }

  // second parameters is a class (object) but it is a partial object. If it is not become a partial class parameter must send like this "this.alertify.Message("", new AlertifyOptions(){....})". Now just this.alertify.Message("", {property:"value","property":"value"})
  tryMessage():void{
    this.alertify.Message("asdf",{
      messageType:MessageType.Success,
      delay:1,
      position:Position.BottomLeft,
    });
  }
  tryDismis():void{
    this.alertify.Dismis();
  }
}
