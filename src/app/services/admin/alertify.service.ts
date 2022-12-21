import { Injectable } from '@angular/core';
declare var alertify :any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  Message(message:string,options:Partial<AlertifyOptions>){
    alertify.set('notifier','position',options.position);
    //message display time. Default 3seconds
    alertify.set('notifier','delay',options.delay);
    const msg = alertify[options.messageType](message);
    //if dismissOthers equals 'true' just one message is shown
    if(options.dismissOthers)
      msg.dismissOthers();
  }

  Dismis(){
    alertify.dismissAll();
  }
}

export class AlertifyOptions{
  messageType:MessageType=MessageType.Message;
  position:Position=Position.BottomRight;
  delay:number=3;
  dismissOthers:boolean=false;
}

export enum MessageType{
  Error="error",
  Message="message",
  Notify="notify",
  Success="success",
  Warning="warning",
}

export enum Position{
  TopCenter="top-center",
  TopRight="top-right",
  TopLeft="top-left",
  BottomRight="bottom-right",
  BottomCenter="bottom-center",
  BottomLeft="bottom-left"
}