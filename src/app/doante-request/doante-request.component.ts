import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicineService } from '../medicine.service';
import { Name } from '../name';
import { Donate } from '../donate';
import * as $ from 'jquery';
import { UserService } from '../user.service';

declare const my:any;
 declare const donateReset:any;
 
@Component({
  selector: 'app-doante-request',
  templateUrl: './doante-request.component.html',
  styleUrls: ['./doante-request.component.css']
})
export class DoanteRequestComponent implements OnInit {

   donateForm:FormGroup;
   
   
   
   email:String='';
   nm:Name[];
   rdShow=true;
   fname='';
   mname='';
   lname='';
   message="";

  constructor(private formBuilder : FormBuilder,
    private medicineService:MedicineService,
    private router : Router,
    private userService:UserService) { 
      this.create();
      
      // this.email=this.medicineService.em;
      this.email=localStorage.getItem("email");
    }
     
   
  test(){
    this.rdShow=!this.rdShow; 
      my();
    }


 create(){
    this.donateForm = this.formBuilder.group({
      medicineName: ['' ],
       expiryDate : [''],
       quantity :[''],
       uses : [''],
       composition : [''],
       power : ['']
    });
    
 }

 

 donate(){
  const donateData={
    email:this.email,
    medicineName:this.donateForm.value.medicineName,
    expiryDate:this.donateForm.value.expiryDate,
    quantity:this.donateForm.value.quantity,
    power:this.donateForm.value.power,
    composition:this.donateForm.value.composition 
   };
   this.medicineService.insertMedicine(donateData)
   .subscribe(data=> {});
   alert("Donation Recorded");
   donateReset();
 }



 


 request(){
   this.router.navigate(['request']);
 }
  ngOnInit() {
    
      
      this.medicineService.userName(this.email)
      .subscribe((data : Name[])=>{
      this.nm=data;
      this.fname= this.nm['fname'];
      this.mname=this.nm['mname'];
      this.lname=this.nm['lname'];
      });


    var dt = new Date();
    document.getElementById("date").innerHTML = dt.toLocaleDateString();
    document.getElementById("time").innerHTML = dt.toLocaleTimeString();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[dt.getDay()];
    console.log("Day : " +n)
    }
  
}
