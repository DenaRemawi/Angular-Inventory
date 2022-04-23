import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { stores } from "../data/stores";
import { valuees } from "../data/valuees";
@Injectable()
export class valueeservice{
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
    Save(v:valuees ):Observable<any>{
        debugger
        return this.http.post("http://localhost/InventoryApi/api/Values",v,this.httpOptions);
    }

    delete(id:number):Observable<any>{
        debugger
        return   this.http.get("http://localhost/InventoryApi/api/Values/delete?id="+id,this.httpOptions);

    }

    LoadAll(id:number):Observable<any>{
        debugger
     return this.http.get("http://localhost/InventoryApi/api/Values/LoadAll?id="+id,this.httpOptions);
    }

    loadbyname(name:string):Observable<any>{
        debugger
     return   this.http.get("http://localhost/InventoryApi/api/Values/loadbyname?name="+name,this.httpOptions);
    }
    update(attvalue:valuees):Observable<any>{
        return this.http.post("http://localhost/InventoryApi/api/Values/Update",attvalue,this.httpOptions)
    }
}