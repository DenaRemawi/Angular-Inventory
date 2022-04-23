import { Component, OnInit,ViewChild , ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { __values } from 'tslib';
import { stores } from '../data/stores';
import { storeservice } from '../service/storeservice';
@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  @ViewChild('f',{static:false}) form !:NgForm;
  @ViewChild("txtName") txtName!:ElementRef;
  listo : stores[]=[];
  DoUpdate={
    id:0,
    name:"",
    status:""

  };

  constructor(private storeservice:storeservice,private storesobject:stores) { }
  PopAdd:boolean=false;
  Textid:any;
  Textname:any;
  Textstatus:any;
  isAlert=true;
  isSucceed=true;
  message!:string;
  category:any;

  ngOnInit(): void {
    this.storeservice.LoadAll().subscribe({ 
      next: data=>{
      debugger
      this.listo=data;
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
var obj=new stores();
obj.name=this.form.value["txtdep"];
obj.status= parseInt(this.form.value["ddlbrand"]);
this.storeservice.Save(obj).subscribe(()=>{
  this.storeservice.LoadAll().subscribe(
    data=>{
      this.listo = data;
    }
  )
})

}
onSearch(){
  var name=this.txtName.nativeElement.value
  this.storeservice.loadbyname(name).subscribe(
    data=>{
      debugger
      this.listo=data;
    })

    }
    deletee(id:number){
      debugger
      this.storeservice.delete(id).subscribe(
        data=>{
          this.storeservice.LoadAll()
        }
      )
    }

    edit(item:any){
      this.DoUpdate=item

    }
    
    
    }
  


