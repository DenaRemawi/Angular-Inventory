import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { order } from "../data/order";
@Injectable()
export class orderservice{
    private httpOptions;
    constructor(private http:HttpClient){
        let token = JSON.parse(localStorage.getItem('token') || '');
        this.httpOptions = {
          headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: `Bearer ${token?.token}`
          })
        };
    }
    Save(o:order ){
        debugger
        this.http.post("http://localhost/InventoryApi/api/order/insert",o,this.httpOptions).subscribe();
    }
    LoadAll():Observable<any>{
        debugger
     return   this.http.get("http://localhost/InventoryApi/api/order/LoadAll",this.httpOptions);
    }

    loadbyname(name:string):Observable<any>{
        debugger
     return   this.http.get("http://localhost/InventoryApi/api/order/loadbyname?name="+name,this.httpOptions);
    }
    delete(id:number){
        debugger
        return   this.http.get("http://localhost/InventoryApi/api/order/delete?id="+id,this.httpOptions);

    }
    Update(o:order ){
        debugger
     return   this.http.post("http://localhost/InventoryApi/api/order/Update",o,this.httpOptions);
    }
    
   
  }