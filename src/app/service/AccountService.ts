import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { siginmodel } from "../data/SignInModel";
import { signupmodel } from "../data/SignUpModel";

@Injectable()
export class accountservice{
    constructor(private http:HttpClient){}

    register(signup:signupmodel){
        return  this.http.post("http://localhost/InventoryApi/api/Account/SignUp",signup)
      }
      
     login(login:siginmodel):Observable<any>{
           return this.http.post("http://localhost/InventoryApi/api/Account/Login",login);
      
    }


}