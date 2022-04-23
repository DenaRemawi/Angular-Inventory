import { Component, OnInit, ViewChild ,ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Attributes } from '../data/Attributes';
import { VmAttributes } from '../data/VmAttributes';
import { attributesservice } from '../service/attributesservice';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {
  TextName:any;

  isAlert=false;
  isSucceed=false;
  message!:string;
  liatt:VmAttributes[]=[]
  @ViewChild("txtName") txtName!:ElementRef;


  constructor(private attributesservice:attributesservice, private Attributes:Attributes, private route:Router, private VmAttributes:VmAttributes) { }


  ngOnInit(): void {
    this.attributesservice.LoadAll().subscribe({ 
      next: data=>{
      debugger
      this.liatt = data;
      this.message="load Successfuly";
      this.isAlert=true;
      this.isSucceed=true;
      setTimeout(()=>
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
  insertt(id:number){
    debugger
  if(id==1){
  this.route.navigate(["/value"],{queryParams:{id:id,value:"color"}})
}
  else{
  this.route.navigate(["/value"],{queryParams:{id:id,value:"size"}})
  }
  }

  deletee(id:number){
    debugger
    this.attributesservice.delete(id).subscribe(
      data=>{
        this.attributesservice.LoadAll()
      }
    )
  }

  onSearch(){
    var name=this.txtName.nativeElement.value
    this.attributesservice.loadbyname(name).subscribe(
      data=>{
        debugger
        this.liatt=data;
      })
  
      }

}
