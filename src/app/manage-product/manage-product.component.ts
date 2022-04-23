import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { product } from '../data/product';
import { productservice } from '../service/productservice';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})

export class ManageProductComponent implements OnInit {
  lipro:product[]=[];
  PopAdd:boolean=false;
  isAlert=true;
  isSucceed=true;
  message!:string;
  @ViewChild("txtName") txtName!:ElementRef;
  constructor(private protectedservice:productservice){}

  ngOnInit(): void {
   
    this.protectedservice.LoadAll().subscribe({ 
      next: data=>{
      debugger
      this.lipro=data;
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
    this.protectedservice.delete(id).subscribe(
      data=>{
        this.protectedservice.LoadAll()
      }
    )
  }


}
