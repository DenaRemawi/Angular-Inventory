import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { stores } from "../data/stores";
@Injectable()
export class storeservice{
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
    Save(s:stores):Observable<any>{
        debugger
      return this.http.post("http://localhost/InventoryApi/api/Stores",s,this.httpOptions);
    }
    LoadAll():Observable<any>{
        debugger
     return   this.http.get("http://localhost/InventoryApi/api/Stores/LoadAll",this.httpOptions);
    }

    loadbyname(name:string):Observable<any>{
        debugger
     return   this.http.get("http://localhost/InventoryApi/api/Stores/loadbyname?name="+name,this.httpOptions);
    }
    delete(id:number){
        debugger
        return   this.http.get("http://localhost/InventoryApi/api/Stores/delete?id="+id,this.httpOptions);

    }
    Update(s:stores ){
        debugger
      return  this.http.post("http://localhost/InventoryApi/api/Stores/Update",s,this.httpOptions).subscribe();
    }
  }