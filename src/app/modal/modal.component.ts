import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MedicineService } from '../medicine.service';
import { Description } from '../description';
import { FormBuilder, FormGroup } from '@angular/forms';
declare const modal:any;
declare const span:any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
   homeForm:FormGroup;
   from:string;
   to:string;
  constructor(private formBuilder:FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.homeForm = this.formBuilder.group({
       from: [''],
       to: ['' ],
       date: ['' ]
    });
  }
  ngOnInit()
   {
      
  }

}
