import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class CurrencyService{
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

loadAll():Observable<any> {
    debugger
 return this.http.get("http://localhost/ApiNG/api/Currency",this.httpOptions);
}

}