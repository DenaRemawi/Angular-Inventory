import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { siginmodel } from '../data/SignInModel';
import { accountservice } from '../service/AccountService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountservice:accountservice, private route:Router, private LoginModel:siginmodel) { }
  @ViewChild('f') 'form':NgForm;
  ngOnInit(): void {
  }

  Onlogin(){
    debugger
    this.LoginModel.username = this.form.value["username"];
    this.LoginModel.password = this.form.value["password"];
    if (this.LoginModel.username != '' && this.LoginModel.password != '') {
      this.accountservice.login(this.LoginModel).subscribe((data) => {
        localStorage.setItem('token',JSON.stringify(data));
        // navigate to brand
        this.form.reset();
        alert("Successfuly login ")
        this.route.navigate(['/home/b'])
      })
    } else {

      alert("  Error  login");
    }
  }
  }
