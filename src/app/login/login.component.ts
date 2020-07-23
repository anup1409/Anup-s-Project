import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormBuilder, Validators} from '@angular/forms'

import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { Profile } from '../profile';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
declare const my;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user:User[];
 userD:Profile;
 loginForm:FormGroup;

  message:any;
  private subscription: Subscription;
    constructor(public formBuilder:FormBuilder,
    public medicineService : MedicineService,
    public router : Router,
    private spinner:NgxSpinnerService,
    public auth:AuthService) {
    this.createForm();
    
  }
  
  createForm(){
    this.loginForm=this.formBuilder.group({
      email : [''],
      pass : ['']
    });
  }
 
  ngOnInit() {
    $('#sign').click(function(){
      $('.liSignup').css("background-color","#1b3680");
    $('.liLogin').css("background","#25c1f5");
    $('.liHome').css("background","#25c1f5");
    })
  }
 
 onSubmit(user)
 
 {
   if(this.loginForm.invalid){
     return;
   }
  const loginData={
     email:this.loginForm.controls.email.value,
     pass:this.loginForm.controls.pass.value
  };
 this.userD=loginData;
 
     this.medicineService.checkUser(loginData)
        .subscribe((data : any)=>{
          this.message=data.message;
         if(this.message=="Login Successful"){
            my();
            this.spinner.show();
            window.alert(this.message);
            this.spinner.hide();
            localStorage.setItem("email",this.userD.email);
            this.medicineService.em=this.userD.email;
            
            this.router.navigate(['donate']);
            this.auth.setLoggedIn(true);
            
          }
          
  else{
    alert(this.message);
   
  }
});
 
  
 }
 }
