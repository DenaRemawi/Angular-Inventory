import { Component, OnInit,ViewChild , ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { __values } from 'tslib';
import { category } from '../data/category';
import { categoryservice } from '../service/categoryservice';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @ViewChild('f',{static:false}) form !:NgForm;
  @ViewChild("txtName") txtName!:ElementRef;
  licate : category[]=[];
  DoUpdate={
    id:0,
    name:"",
    status:""

  };

  constructor(private categoryservice:categoryservice,private categoryObject:category) { }
  PopAdd:boolean=false;
  Textid:any;
  Textname:any;
  Textstatus:any;
  isAlert=true;
  isSucceed=true;
  message!:string;
  category:any;

  ngOnInit(): void {
    this.categoryservice.LoadAll().subscribe({ 
      next: data=>{
      debugger
      this.licate=data;
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
var obj=new category();
obj.name=this.form.value["txtdep"];
obj.status= parseInt(this.form.value["ddlbrand"]);
this.categoryservice.Save(obj).subscribe(()=>{
  this.categoryservice.LoadAll().subscribe(
    data=>{
      this.licate = data;
    }
  )
})

}
onSearch(){
  var name=this.txtName.nativeElement.value
  this.categoryservice.loadbyname(name).subscribe(
    data=>{
      debugger
      this.licate=data;
    })

    }
    deletee(id:number){
      debugger
      this.categoryservice.delete(id).subscribe(
        data=>{
          this.categoryservice.LoadAll()
        }
      )
    }

    edit(item:any){
      this.DoUpdate=item

    }
    
    
    }
  


