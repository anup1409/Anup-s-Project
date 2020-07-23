import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MedicineService } from '../medicine.service';
declare const complainReset:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm:FormGroup;
  msg:any;
  constructor(private formBuilder : FormBuilder,
    private medicineService:MedicineService) {
    this.create();
   }
  create(){
    this.contactForm = this.formBuilder.group({
      name: ['' ],
       email : [''],
       message :['']
    });
    
 }

 onSubmit(){
  const contactData={
    name:this.contactForm.value.name,
    email:this.contactForm.value.email,
    message:this.contactForm.value.message
   
   };
   console.log(contactData)
   this.medicineService.complain(contactData)
   .subscribe(data=> {});
   alert("Submitted!!!");
   complainReset();
 }
  ngOnInit() {
  }

}
