import { Component, OnInit } from '@angular/core';
declare const log;
import {  FormGroup, FormBuilder} from '@angular/forms';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})
export class RegisterComponent implements OnInit {
  cities=['Pune','Mumbai','Delhi'];
  states=['Maharastra','Delhi'];
  registerForm : FormGroup;
  
   constructor(private formBuilder : FormBuilder,
    private medicineService : MedicineService,
    private router : Router) { 
      this.createForm();
    }
    createForm() {
      this.registerForm = this.formBuilder.group({
         fname: [''],
         mname: ['', ],
         lname: ['', ],
         al2: ['', ],
         gender: [''],
         dob: [''],
         contact: [''],
         al1: [''],
         city: [''],
         state: [''],
         pin: [''],
         email: [''],
         pass: [''],
         cpass: ['' ],
         
      });
    }
     login(){
      this.router.navigate(['login']);
      log();
     } 

    onSubmit()
    {
      
      if(this.registerForm.value.pass!=this.registerForm.value.cpass)
    {
      alert("Password and confirm Password not match");
    }
       else
       {
        this.medicineService.insertUser(this.registerForm.value )
        .subscribe(data=> {});
        alert("Registration successful");
        
        this.router.navigate(['login']);
       }
        
      }
  ngOnInit() {
  }
}
