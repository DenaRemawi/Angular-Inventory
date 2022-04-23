import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Attributes } from "../data/Attributes";
@Injectable()
export class attributesservice{
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
    LoadAll():Observable<any>{
        debugger
     return this.http.get("http://localhost/InventoryApi/api/Attrub/LoadAll", this.httpOptions);
    }

    delete(id:number){
        debugger
        return   this.http.get("http://localhost/InventoryApi/api/Attrub/delete?id="+id, this.httpOptions);

    }

    loadbyname(name:string):Observable<any>{
        debugger
     return   this.http.get("http://localhost/InventoryApi/api/Attrub/loadbyname?name="+name, this.httpOptions);
    }

}

   