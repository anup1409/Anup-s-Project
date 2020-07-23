import { Component, OnInit } from '@angular/core';
import { MedicineService } from './medicine.service';

import * as $ from 'jquery';
import { Router } from '@angular/router';
declare const hom:any;
declare const out:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
  title = 'medicine';
 
   constructor(private service:MedicineService,
    private router:Router){}
   logout(){
    out();
  }
  home(){
    this.router.navigate(['home']);
    hom();
  }
  ngOnInit(){
  
    if(localStorage.getItem('email')==null){

      $('.liHome').css('visibility','visible');
      $('.lLogin').css('visibility','visible');
      $('.liSignup').css('visibility','visible');
      $('.liContact').css('visibility','visible');
      $('.liAbout').css('visibility','visible');
      $('.liProfile').css('visibility','hidden');
      $('.liLogout').css('visibility','hidden');
      $('#bar').css('visibility','hidden');
    }
    else
    {
      $('.liHome').css('visibility','visible');
      $('.liLogin').css('visibility','hidden');
      $('.liSignup').css('visibility','hidden');
      $('.liContact').css('visibility','visible');
      $('.liAbout').css('visibility','visible');
      $('.liProfile').css('visibility','visible');
      $('.liLogout').css('visibility','visible');
      $('#bar').css('visibility','visible');
      $('.liContact').css('margin-left','-217px');
      $('.liAbout').css('margin-left','-120px');
      $('.liLogout').css('margin-left','-2px');
       $('.liProfile').css('margin-left','-10px');
       $('#bar').css('margin-top','19px');
    }
       
    $('.liHome').click(function(){
      $('.liHome').css("background-color","#1b3680");
      $('.liLogin').css("background","#25c1f5");
      $('.liSignup').css("background","#25c1f5");
      $('.liContact').css("background","#25c1f5");
      $('.liAbout').css("background","#25c1f5");
      $('.liProfile').css("background","#25c1f5");
    });
    
    $('.liLogin').click(function(){
      $('.liLogin').css("background-color","#1b3680");
      $('.liHome').css("background","#25c1f5");
      $('.liSignup').css("background","#25c1f5");
      $('.liContact').css("background","#25c1f5");
      $('.liAbout').css("background","#25c1f5");
      $('.liProfile').css("background","#25c1f5");
    });

    $('.liSignup').click(function(){
      $('.liSignup').css("background-color","#1b3680");
      $('.liHome').css("background","#25c1f5");
      $('.liLogin').css("background","#25c1f5");
      $('.liContact').css("background","#25c1f5");
      $('.liAbout').css("background","#25c1f5");
      $('.liProfile').css("background","#25c1f5");
    });

    $('.liContact').click(function(){
      $('.liContact').css("background-color","#1b3680");
      $('.liHome').css("background","#25c1f5");
      $('.liSignup').css("background","#25c1f5");
      $('.liLogin').css("background","#25c1f5");
      $('.liAbout').css("background","#25c1f5");
      $('.liProfile').css("background","#25c1f5");
    });

    $('.liAbout').click(function(){
      $('.liAbout').css("background-color","#1b3680");
      $('.liHome').css("background","#25c1f5");
      $('.liSignup').css("background","#25c1f5");
      $('.liContact').css("background","#25c1f5");
      $('.liLogin').css("background","#25c1f5");
      $('.liProfile').css("background","#25c1f5");
    });

    $('.liProfile').click(function(){
      $('.liProfile').css("background-color","#1b3680");
      $('.liHome').css("background","#25c1f5");
      $('.liContact').css("background","#25c1f5");
      $('.liLogout').css("background","#25c1f5");
      $('.liAbout').css("background","#25c1f5");
    });

    $('.liLogout').click(function(){
      $('.liLogin').css("background","#25c1f5");
      $('.liHome').css("background","#25c1f5");
      $('.liContact').css("background","#25c1f5");
      $('.liSignup').css("background","#25c1f5");
      $('.liAbout').css("background","#25c1f5");
    });

    $('.liModal').click(function(){
      $('.liProfile').css("background-color","#25c1f5");
      $('.liHome').css("background","#25c1f5");
      $('.liContact').css("background","#25c1f5");
      $('.liLogout').css("background","#25c1f5");
      $('.liAbout').css("background","#25c1f5");
    });

  }
}