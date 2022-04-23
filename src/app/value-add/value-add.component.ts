import { Component, OnInit,ViewChild , ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { __values } from 'tslib';
import { valuees } from '../data/valuees';
import { valueeservice } from '../service/valueeservice';
import{attributesservice} from '../service/attributesservice';
import { Attributes } from '../data/Attributes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-value-add',
  templateUrl: './value-add.component.html',
  styleUrls: ['./value-add.component.css']
})
export class ValueAddComponent implements OnInit {
  @ViewChild('f',{static:false}) form !:NgForm;
  @ViewChild("txtName") txtName!:ElementRef;
  livalue : valuees[]=[];

  constructor(private valueeservice:valueeservice , private valuesObject:valuees,private A:ActivatedRoute){ }
  PopAdd:boolean=false;
  isAlert=true;
  isSucceed=true;
  message!:string;
 'values': string;
  'id': number;
  AttID=0;
  edit:boolean=false;

  ngOnInit(): void {
    debugger
    this.values = this.A.snapshot.queryParams['values'];
    this.id = parseInt(this.A.snapshot.queryParams['id']);
    this.valueeservice.LoadAll(this.id).subscribe({
      next: data=>{
        debugger
        this.livalue=data;
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
  this.valuesObject.name = this.form.value["txtdep"];
   this.valuesObject['attrubite_ID'] =  this.id
   this.valuesObject.id = this.AttID
       debugger
      this.valueeservice.Save(this.valuesObject).subscribe({
        next:()=>{
          this.valueeservice.LoadAll(this.id).subscribe(
            data =>{
              this.livalue = data;
              this.isAlert=true;  
              
      
        
      });
     }
    
       });

      }
  deletee(id:number){
    debugger
    this.valueeservice.delete(id).subscribe(()=>{
      this.valueeservice.LoadAll(this.id).subscribe(
        data=>{
          this.livalue = data;
        }
      )
    }
    
    )
  }

  onSearch(){
    var name=this.txtName.nativeElement.value
    this.valueeservice.loadbyname(name).subscribe(
      data=>{
        debugger
        this.livalue=data;
      })
  
      }


}