import { Component, OnInit,ViewChild } from '@angular/core';
import { country } from '../data/country';
import { currency } from '../data/currency';
import { CountryService } from '../service/CountryService';
import { CurrencyService } from '../service/CurrencyService';
import { NgForm } from '@angular/forms';
import { CompanyService } from '../service/CompanyService';
import { Company } from '../data/Company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  licou : country[]=[];
  licur : currency[]=[];
  @ViewChild('f',{static:false}) form !:NgForm;

  constructor(private CountryService:CountryService,private CurrencyService:CurrencyService,private CompanyService:CompanyService,private companyObject:Company) { }

  ngOnInit(): void {
    this.listcoun();
this.listcurr();
  }

  listcoun(){
    debugger
    this.CompanyService.listcoun().subscribe(
      data=>{
        debugger
        this.licou=data;
      }
    );
  }

  listcurr(){
    debugger
    this.CompanyService.listcurr().subscribe(
      data=>{
        debugger
        this.licou=data;
      }
    );
  }

  
onSave(){
  debugger
var co=new Company();
co.name=this.form.value["name"];
co.country_id=this.form.value["ddlco"];
co.message=this.form.value["meesage"];
co.address=this.form.value["addres"];
co.vat_Charge=this.form.value["vat"];
co.charge_Amount=this.form.value["charge"];
this.CompanyService.Save(co);

}

}

