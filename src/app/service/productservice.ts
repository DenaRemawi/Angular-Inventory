import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { product } from '../data/product';

@Injectable()
export class productservice{
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
    listbrands():Observable<any>{
  debugger
    return this.http.get("http://localhost/InventoryApi/api/Brand/LoadAll",this.httpOptions);
        }

 listccategory():Observable<any>{
  debugger
   return this.http.get("http://localhost/InventoryApi/api/Category/LoadAll",this.httpOptions);
        }

 liststoreee():Observable<any>{
     return   this.http.get("http://localhost/InventoryApi/api/Stores/LoadAll",this.httpOptions);
        }

        uploadFile(fd:FormData):Observable<any>{
          debugger
          return this.http.post ("http://localhost/InventoryApi/api/Productes/UploadFile",fd);
        }

        LoadAll():Observable<any>{
          debugger
       return this.http.get("http://localhost/InventoryApi/api/Productes/LoadAll",this.httpOptions);
      }

      Save(p:product){
        debugger
        this.http.post("http://localhost/InventoryApi/api/Productes",p,this.httpOptions).subscribe();
    }

    delete(id:number){
      debugger
      return   this.http.get("http://localhost/InventoryApi/api/Productes/delete?id="+id,this.httpOptions);

  }

  findee(id:number):Observable<any>{
    debugger
    return this.http.get("http://localhost/InventoryApi/api/Productes/fiinded?id="+id,this.httpOptions);

    }}

