import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { brands } from "../data/brands";
@Injectable()
export class BrandsService{
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
    Save(b:brands ):Observable<any>{
        debugger
      return  this.http.post("http://localhost/InventoryApi/api/Brand/insert",b,this.httpOptions);
    }
    LoadAll():Observable<any>{
        debugger
     return   this.http.get("http://localhost/InventoryApi/api/Brand/LoadAll",this.httpOptions);
    }

    loadbyname(name:string):Observable<any>{
        debugger
     return   this.http.get("http://localhost/InventoryApi/api/Brand/loadbyname?name="+name,this.httpOptions);
    }
    delete(id:number){
        debugger
        return   this.http.get("http://localhost/InventoryApi/api/Brand/delete?id="+id,this.httpOptions);

    }
    Update(b:brands ){
        debugger
     return   this.http.post("http://localhost/InventoryApi/api/Brand/Update",b,this.httpOptions);
    }
    Edit(id:number):Observable<any>{
        return this.http.get("http://localhost/InventoryApi/api/Brand/Edit?id="+id,this.httpOptions);
    }
  }