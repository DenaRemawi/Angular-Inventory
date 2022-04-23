import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { category } from "../data/category";
@Injectable()
export class categoryservice{
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
    Save(c:category):Observable<any>{
        debugger
     return this.http.post("http://localhost/InventoryApi/api/Category",c,this.httpOptions);
    }
    LoadAll():Observable<any>{
        debugger
     return   this.http.get("http://localhost/InventoryApi/api/Category/LoadAll",this.httpOptions);
    }

    loadbyname(name:string):Observable<any>{
        debugger
     return   this.http.get("http://localhost/InventoryApi/api/Category/loadbyname?name="+name,this.httpOptions);
    }
    delete(id:number){
        debugger
        return   this.http.get("http://localhost/InventoryApi/api/Category/delete?id="+id,this.httpOptions);

    }
    Update(c:category ){
        debugger
        this.http.post("http://localhost/InventoryApi/api/Category/Update",c,this.httpOptions).subscribe();
    }
  }