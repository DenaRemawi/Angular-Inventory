import { Component, OnInit,ViewChild , ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { __values } from 'tslib';
import { order } from '../data/order';
import { orderservice } from '../service/orderservice';
@Component({
  selector: 'app-manag-orders',
  templateUrl: './manag-orders.component.html',
  styleUrls: ['./manag-orders.component.css']
})
export class ManagOrdersComponent implements OnInit {
  @ViewChild('f',{static:false}) form !:NgForm;
  @ViewChild("txtName") txtName!:ElementRef;
  liorder : order[]=[];

  constructor(private orderservice:orderservice){}
  PopAdd:boolean=false;
  isAlert=true;
  isSucceed=true;
  message!:string;
  ngOnInit(): void {
    this.orderservice.LoadAll().subscribe({ 
      next: data=>{
      debugger
      this.liorder=data;
      this.message="load Successfuly";
      this.isAlert=true;
      this.isSucceed=true;
      setTimeout(()=>
      this.isAlert=false,
       5000);
    },

    error:err=>{
      this.message="load error";
      this.isAlert=true;
      this.isSucceed=false;
      setTimeout(()=>
      this.isAlert=false,
       5000);
    }
    
    

      }
    )
    
  }

  deletee(id:number){
    debugger
    this.orderservice.delete(id).subscribe(
      data=>{
        this.orderservice.LoadAll()
      }
    )
  }



  }




