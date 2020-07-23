import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Profiled } from '../profiled';
import { Donate } from '../donate';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  email:string="";
  
   fname= "";
   mname= "";
   lname= "";
   gender= "";
   dob= "";
   contact= "";
   al1= "";
   al2= "";
   city= "";
   state= "";
   pin= "";
   emaill="";
   profile:Profiled[];
   donate:Donate[];
   request:Donate[];
   
   photo:Blob;
   imageUrl=null;
  
  constructor(public formBuilder:FormBuilder,
    public medicineService : MedicineService,
    public router : Router,private http:HttpClient,
    private _DomSanitizationService:DomSanitizer,
    private spinner:NgxSpinnerService) {
    
      //  this.email=this.medicineService.em;
       this.email=localStorage.getItem('email');
    }
    onFileSelected(event){
      this.photo=event.target.files[0];
       
    }
 

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
    }
   
   remove(){
     
    (async () => { 
      
      this.medicineService.removeImage(this.email)
         .subscribe(data=>{});
         alert("Picture Removed!!!");

      await this.delay(500);

     
      this.medicineService.test(this.email).subscribe((res) => { 
        this.photo = res;
        var myReader:FileReader = new FileReader();
        myReader.onloadend = (e) => {
          if(JSON.stringify(myReader.result)=='"data:"'){
            this.imageUrl=this._DomSanitizationService.bypassSecurityTrustUrl("assets/Images/default.png");
            return;
          }else{
          this.imageUrl = this._DomSanitizationService.bypassSecurityTrustUrl(<string>myReader.result);
          }
        }
        myReader.readAsDataURL(this.photo);   
      });
  })();
           
   }

   upload(){
    const fd = new FormData();
    fd.append("userImg",this.photo);
    fd.append("email",this.email);
    (async () => { 
      
      this.medicineService.postImage(fd)
      .subscribe(res => {});
        this.spinner.show(); 

      await this.delay(500);

      
      this.medicineService.test(this.email).subscribe((res) => { 
        this.photo = res;
        var myReader:FileReader = new FileReader();
        myReader.onloadend = (e) => {
          this.imageUrl = this._DomSanitizationService.bypassSecurityTrustUrl(<string>myReader.result);
        }
        myReader.readAsDataURL(this.photo);   
      });
  })();
  this.spinner.hide(); 
}

  ngOnInit(){
    
    if(this.email==""){
      this.imageUrl=this._DomSanitizationService.bypassSecurityTrustUrl("assets/Images/default.png");
      
    }else{
    this.medicineService.test(this.email).subscribe((res) => { 
      this.photo = res;
      var myReader:FileReader = new FileReader();
      myReader.onloadend = (e) => {
        if(JSON.stringify(myReader.result)=='"data:"'){
          this.imageUrl=this._DomSanitizationService.bypassSecurityTrustUrl("assets/Images/default.png");
          
        }else{
        this.imageUrl = this._DomSanitizationService.bypassSecurityTrustUrl(<string>myReader.result);
        }
      }
      myReader.readAsDataURL(this.photo);   
    });
    }
      this.medicineService.userDetails(this.email)
      .subscribe((data : Profiled[])=>{
        this.profile=data;
        this.fname=this.profile['fname'];
        this.mname=this.profile['mname'];
        this.lname=this.profile['lname'];
        this.gender=this.profile['gender'];
        this.dob=this.profile['dob'];
        this.al1=this.profile['al1'];
        this.al2=this.profile['al2'];
        this.contact=this.profile['contact'];
        this.city=this.profile['city'];
        this.state=this.profile['state'];
        this.pin=this.profile['pin'];
        this.emaill=this.profile['email'];
        });

        this.medicineService.donatelist(this.email)
        .subscribe((data : Donate[])=>{
          this.donate=data;
          });

          this.medicineService.requestlist(this.email)
          .subscribe((data : Donate[])=>{
            this.request=data;
           
            });

          $('.nav ul .user-donate').click(function (){
     
            $('.nav ul .user-donate').addClass("active");
            $('.nav ul .user-request').removeClass("active");
          
            $('.profile-body .profile-request table').css("visibility","hidden");
            $('.profile-body .profile-donate table').css("visibility","visible");
        });


        $('.nav ul .user-request').click(function (){
     
          $('.nav ul .user-donate').removeClass("active");
          $('.nav ul .user-request').addClass("active");
        
          $('.profile-body .profile-request table').css("visibility","visible");
          $('.profile-body .profile-donate table').css("visibility","hidden");
      });
       
      $('#change').click(function(){
        document.getElementById('icon').click();
        $("#upload").removeAttr("disabled");
      });


      $('.chatbtn').click(function(){
        $('#message-container').css('visibility','visible');
       
       
      });
    
      $('#close').click(function(){
        $('#message-container').css('visibility','hidden');
      });
     
      $('#minimise').click(function(){
        $('#message-area').hide();
        $('#minimise').hide();
        $('#send-container').hide();
        $('#max').show();
        $('.topnav').css('margin-top','223.7px');
       
      });
      $('#max').click(function(){
        $('#message-area').show();
        $('#minimise').show();
        $('#send-container').show();
        $('#max').hide();
        $('.topnav').css('margin-top','0px');
         
      });
  }
 
}
