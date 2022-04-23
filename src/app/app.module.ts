import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoryComponent } from './category/category.component';
import { StoresComponent } from './stores/stores.component';
import { AttributesComponent } from './attributes/attributes.component';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { CompanyComponent } from './company/company.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ValueAddComponent } from './value-add/value-add.component';
import { AddOrderComponent } from './add-orders/add-orders.component';
import { ManagOrdersComponent } from './manag-orders/manag-orders.component';
import { FormsModule } from '@angular/forms';
import { BrandsService } from './service/BrandsService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { brands } from './data/brands';
import { categoryservice } from './service/categoryservice';
import { category } from './data/category';
import { storeservice } from './service/storeservice';
import { stores } from './data/stores';
import { productservice } from './service/productservice';
import { product } from './data/product';
import { valueeservice } from './service/valueeservice';
import { valuees } from './data/valuees';
import { attributesservice } from './service/attributesservice';
import { VmAttributes } from './data/VmAttributes';
import { Attributes } from './data/Attributes';
import { CountryService } from './service/CountryService';
import { CurrencyService } from './service/CurrencyService';
import { CompanyService } from './service/CompanyService';
import { Company } from './data/Company';
import { order } from './data/order';
import { orderservice } from './service/orderservice';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { siginmodel } from './data/SignInModel';
import { signupmodel } from './data/SignUpModel';
import { accountservice } from './service/AccountService';
import { HomeComponent } from './home/home.component';


const appRoutes:Routes=[
  {path: '',component:LoginComponent},
  {path: 'home',component:HomeComponent,children:[
    {path:'b',component:BrandsComponent},
    {path:'c',component:CategoryComponent},
    {path:'s',component:StoresComponent},
    {path:'a',component:AttributesComponent},
    {path:'r',component:ReportComponent},
    {path:'co',component:CompanyComponent},
    {path:'pr',component:ProfileComponent},
    {path:'se',component:SettingComponent},
    {path:'adp',component:AddproductsComponent},
    {path:'map',component:ManageProductComponent},
    {path:'value',component:ValueAddComponent},
    {path:'aoo',component:AddOrderComponent},
    {path:'moo',component:ManagOrdersComponent},
  ]},
  {path: 'signup',component:SignupComponent},
 
];
@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    CategoryComponent,
    StoresComponent,
    AttributesComponent,
ManageProductComponent,
AddproductsComponent,
    ReportComponent,
    CompanyComponent,
    ProfileComponent,
    SettingComponent,
    ValueAddComponent,
    AddOrderComponent,
    ManagOrdersComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
    

  ],
  providers: [BrandsService,brands,categoryservice,category,storeservice,stores,
    productservice,product,valueeservice,valuees,attributesservice,VmAttributes,
    Attributes,CountryService,CurrencyService,CompanyService,Company,orderservice,order,
    siginmodel,signupmodel,accountservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
