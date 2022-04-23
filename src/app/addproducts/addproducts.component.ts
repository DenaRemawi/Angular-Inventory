import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { __values } from 'tslib';
import { BrandsService } from '../service/BrandsService';
import { brands } from '../data/brands';
import { productservice } from '../service/productservice';
import { product } from '../data/product';
import { category } from '../data/category';
import { categoryservice } from '../service/categoryservice';
import { stores } from '../data/stores';
import { storeservice } from '../service/storeservice';
import { valueeservice } from '../service/valueeservice';
import { valuees } from '../data/valuees';


@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  liBrand : brands[]=[];
  licate : category[]=[];
  listo : stores[]=[];
  lisize: valuees[]=[];
  licolor:valuees[]=[];
  filepath!:string;
  @ViewChild('f',{static:false}) form !:NgForm;


  constructor(private brandsService:BrandsService, private storeservice:storeservice, private attv:valuees  ,private categoryservice:categoryservice   ,  private protectedservice:productservice,private productObject:product, private attvalue:valueeservice) { }
  ngOnInit(): void {
this.listtbrands();
this.listtcategory();
this.listtstore();
this.attvalue.LoadAll(1).subscribe(
  data=>{
    this.lisize = data;
  }
)
this.attvalue.LoadAll(2).subscribe(
  data=>{
    this.licolor = data;
  }
)

  }

listtbrands(){
  debugger
  this.protectedservice.listbrands().subscribe(
    data=>{
      debugger
      this.liBrand=data;
    }
  );
}

listtcategory(){
  debugger
  this.protectedservice.listccategory().subscribe(
    data=>{
      debugger
      this.licate=data;
    }
  );
}

listtstore(){
  debugger
  this.protectedservice.liststoreee().subscribe(
    data=>{
      debugger
      this.listo=data;
    }
  );
}

onSave(){
  debugger
var p=new product();
p.path = this.filepath;
p.name=this.form.value["name"];
p.sku=this.form.value["SKU"];
p.price=+ this.form.value["price"];
p.qty=+this.form.value["qty"];
p.description=this.form.value["Description"];
p.avability =+this.form.value["avilabilty"];

p.brands_Id=+this.form.value["brands"];
p.category_Id=+this.form.value["category"];
p.stores_Id=+this.form.value["stores"];
p.color_Id=+this.form.value["ddlcolor"];
p.size_Id=+this.form.value["ddlsize"];
this.protectedservice.Save(p);

}


fileSelected(event: any) {
  debugger
  
  let selectedFile = event.target.files[0];
  let fd = new FormData();
  fd.append(selectedFile.name, selectedFile);
  this.protectedservice.uploadFile(fd).subscribe(
    data=>{
      debugger
      this.filepath="http://localhost/InventoryAPI/img/"+data
    })

      
      
      


}

}


