import { Inject, inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  // @Inject("baseUrl") private baseUrl:String => get value of "baseUrl" as a string from app.module.ts -> providers -> baseUrl
  constructor(private httpClient:HttpClient, @Inject("baseUrl") private baseUrl:String) { }

  private Url(requestParameter:Partial<RequestParameter>):string{
    return `${requestParameter.baseUrl?requestParameter.baseUrl:this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}`:""}`;
  }
  
  get<T>(requestParameter:Partial<RequestParameter>,id?:string):Observable<T>{
    let url:string ="";
    if(requestParameter.fullEndpoint){
      url=requestParameter.fullEndpoint;
    }
    else{
      url=`${this.Url(requestParameter)}${id?`/${id}`:""}`;
    }
    return this.httpClient.get<T>( url,{headers:requestParameter.headers})
    
  }
  post<T>(requestParameter:Partial<RequestParameter>,body:Partial<T>):Observable<T>{
    let url:string ="";
    if(requestParameter.fullEndpoint){
      url=requestParameter.baseUrl;
    }
    else{
      url=`${this.Url(requestParameter)}`;
    }
    return this.httpClient.post<T>(url,body,{headers:requestParameter.headers});
  }
  put<T>(requestParameter:Partial<RequestParameter>,body:Partial<T>):Observable<T>{
    let url:string="";
    if(requestParameter.fullEndpoint){
      url=requestParameter.fullEndpoint;
    }
    else{
      url=`${this.Url(requestParameter)}`
    }
    return this.httpClient.put<T>(url,body,{headers:requestParameter.headers});
  }
  delete<T>(requestParameter:Partial<RequestParameter>,id:string):Observable<T>{
    let url:string="";
    if(requestParameter.fullEndpoint){
      url=requestParameter.fullEndpoint;
    }
    else{
      url=`${this.Url(requestParameter)}/${id}`;
    }
    return this.httpClient.delete<T>(url,{headers:requestParameter.headers});
  } 
}


export class RequestParameter{
  controller?:string;
  action?:string;
  headers?:HttpHeaders;
  baseUrl?:string;
  fullEndpoint?:string
}