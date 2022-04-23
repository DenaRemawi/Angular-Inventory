import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { brands } from "../data/brands";
import { Company } from "../data/Company";
@Injectable()
export class CompanyService{
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
    Save(co:Company ){
        debugger
        this.http.post("http://localhost/InventoryApi/api/Company/insert",co,this.httpOptions).subscribe();
    }

    listcoun():Observable<any>{
        debugger
         return this.http.get("http://localhost/InventoryApi/api/Country",this.httpOptions);
              }

 listcurr():Observable<any>{
    debugger
    return this.http.get("http://localhost/InventoryApi/api/Currency",this.httpOptions);
    }      
}