import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { signupmodel } from '../data/SignUpModel';
import { accountservice } from '../service/AccountService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private accountservice:accountservice, private route:Router, private SignUpModel:signupmodel) { }
  @ViewChild('f') 'form':NgForm;
  ngOnInit(): void {
  }

  OnSignup(){
    this.SignUpModel.name=this.form.value["name"];
    this.SignUpModel.username=this.form.value["username"];
    this.SignUpModel.email=this.form.value["email"];
    this.SignUpModel.password=this.form.value["password"];
    if(this.SignUpModel.username != '' && this.SignUpModel.password!='' && this.SignUpModel.email!='' ){
      this.accountservice.register(this.SignUpModel).subscribe(
        ()=>{
          this.form.reset();
          alert("Successfuly registered");
        }
      )
    
    
    }else{
    
      alert("Please Fill Your Information ... ");

    }
  }

}
