import { Component, OnInit,ViewChild , ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { __values } from 'tslib';
import { brands } from '../data/brands';
import { BrandsService } from '../service/BrandsService';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})

export class BrandsComponent implements OnInit {
  @ViewChild('f') form1 !:NgForm;
  @ViewChild("txtName") txtName!:ElementRef;
  liBrand : brands[]=[];
  ID=0;
  update: boolean = false;
  

 constructor(private brandsService:BrandsService,private brandObject:brands) { }
  PopAdd:boolean=false;
  isAlert=true;
  isSucceed=true;
  message!:string;

  Textid:any;
  Textname:any;
  Textstatus:any;
 
  brands:any;

  ngOnInit(): void {
    this.brandsService.LoadAll().subscribe({ 
      next: data=>{
      debugger
      this.liBrand=data;
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

onSave(){
  debugger
  this.brands.name=this.form1.value["txtdep"];
  this.brands.status=parseInt(this.form1.value["ddlbrand"]);
  this.brands.id=this.ID
if(this.update){
this.brandsService.Edit(this.brands).subscribe(
()=>
  this.brandsService.LoadAll().subscribe(
   data=>{
      this.liBrand=data;
      this.form1.form.patchValue({
        "txtdep":"",
        "ddlbrand":""

       })

  }
  )

)}
else{
  this.brandsService.Save(this.brands).subscribe(
    ()=>{
this.brandsService.LoadAll().subscribe(
  data=>{
    this.liBrand=data;
    this.form1.form.patchValue({
      "txtdep":"",
      "ddlbrand":''

     })


  }
)

    }
  )
}


}
UUpdate(id:number){
debugger
  this.ID = id;
  this.update = true;
  this.brandsService.Edit(id).subscribe(
    data=>{
      debugger
       this.form1.form.patchValue({
         "txtdep":data.name,
         "ddlbrand":data.status,
        
       })
    });

}


onSearch(){
  var name=this.txtName.nativeElement.value
  this.brandsService.loadbyname(name).subscribe(
    data=>{
      debugger
      this.liBrand=data;
    })

    }
    deletee(id:number){
      debugger
      this.brandsService.delete(id).subscribe(
        data=>{
          this.brandsService.LoadAll()
        }
      )
    }
   
  
      
    
    
  
    
    
    

    }
    
  
  
