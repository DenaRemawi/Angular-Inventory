import { Component, OnInit, Query, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { order } from '../data/order';
import { product } from '../data/product';
import { productservice } from '../service/productservice';
import { orderservice } from '../service/orderservice';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css']
})
export class AddOrderComponent implements OnInit {
  @ViewChild('f2') 'form': NgForm;
  constructor(private ro:Router,private route:ActivatedRoute, private orderService:orderservice, private productService:productservice,private protcted:product,private order:order) { }
  isValid: boolean = true;
  vat=0.15;
  liProd:product[]=[]
  id:number=this.route.snapshot.queryParams['id'];
  ngOnInit(): void {
 
      this.productService.LoadAll().subscribe(
        data=>{
          debugger
          this.liProd=data;
        }
      );
    }
  
  onsave(){
    debugger
    var or=new order();

    or.customerName=this.form.value["Cutname"]
    or.address=this.form.value["address"]
    or.phone=this.form.value["phonn"]
   or.qty= parseInt(this.form.value["qty"])
    or.rate = parseInt(this.form.value["rate"])
    or.amount = parseInt(this.form.value["amount"])
    or.grossAmount =+ this.form.value["amountt"]
    or.vat =parseInt(this.form.value["vat"])
    or.netamount =+this.form.value["netAmount"]
   or.discount =parseInt(this.form.value["disc"])
   or.product_Id=parseInt(this.form.value["ddlprod"])
    this.orderService.Save(or);  
}
change(pro:any){
  this.productService.findee(pro.target.value).subscribe(
    data=>{
      debugger
      this.form.form.patchValue({
      gamount:data.price*data.qty,
      "qty":data.qty,
      "rate":data.price,
      "amount":data.price*data.qty,
      "amountt":data.price*data.qty,
      "vat":(data.price*data.qty)*this.vat,
      "netAmount":((data.price*data.qty)*this.vat)+(data.price*data.qty)
    });
  });
  }

  chQty(Q:any){
    debugger
    var Q= Q.target.value
    if(Q<=20){
    var price= this.form.value["rate"]
    var amount=Q*price
    var vat_=this.vat*amount
    var net_amount=(amount*this.vat)+amount
    this.form.form.patchValue({
    "amount":amount,
    "rate":price,
    "amountt":amount,
    "vat":vat_,
    "netAmount":net_amount
    })}
    else{
      alert("Error quantity is < 20")
    }

  }
  discount(d:any){
    var d=d.target.value
    var namount=+ this.form.value["netAmount"]
    this.form.form.patchValue({
      "netAmount":namount-d
    })
  }

}

