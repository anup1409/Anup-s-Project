  function my(){
       $('.liLogin').css("visibility","hidden");
       $('.liLogout').css("visibility","visible");
       $('.liAbout').css("margin-left","-120px");
       $('.liProfile').css("visibility","visible");
       $('.liSignup').css("visibility","hidden");
       $('.liContact').css("margin-left","-210px");
       $('.liLogout').css("margin-left","1px");
       $('.liProfile').css("margin-left","-15px");
       $('#bar').css("visibility","visible");
       $('#bar').css("margin-top","20px");
       $('#bar').css("color","#fff");
  }



  function out(){
     $('#bar').css("visibility","hidden");
     $('.liProfile').css("visibility","hidden");
     $('.liLogin').css("visibility","visible");
     $('.liLogout').css("visibility","hidden");
     $('.liSignup').css("visibility","visible");
     $('.liSignup').css("margin-left","0px");
     $('.liAbout').css("margin-left","0px");
     $('.liContact').css("margin-left","0px");
     $('.liProfile').css("margin-left","-255px");
     $('.liLogout').css("margin-left","-255px");
      
}

function donateReset(){
     var s="";
     document.getElementById('mname').value=s;
     document.getElementById('expiryDate').value=s;
     document.getElementById('quantity').value=s;
     document.getElementById('uses').value=s;
     document.getElementById('composition').value=s;
     document.getElementById('power').value=s;
     
}

function searchReset(){
     var s="";
     document.getElementById('msearch').value=s;
     
        
}
function complainReset(){
     var s="";
     document.getElementById('name').value=s;
     document.getElementById('message').value=s;    
     document.getElementById('email').value=s;
}

function log(){
     $('.liLogin').css("background-color","#1b3680");
     $('.liSignup').css("background","#25c1f5");
     $('.liHome').css("background","#25c1f5");
}

function hom(){
     $('.liHome').css("background-color","#1b3680");
      $('.liLogin').css("background","#25c1f5");
      $('.liSignup').css("background","#25c1f5");
      $('.liContact').css("background","#25c1f5");
      $('.liAbout').css("background","#25c1f5");
      $('.liProfile').css("background","#25c1f5");
}


function getColumnValue(){
     
     $(document).ready(function(){
            $('#tb tr').click(function() {
            $('#tb').css("visibility","hidden");
            var $row = $(this).closest("tr");
            $('#pa').css("visibility","hidden");   
            var $tds = $row.find("td:first");
             
          $('.medicineDespription').css("visibility","visible");
            document.getElementById('mname').value=$tds.text();
            document.getElementById('mname').click();
            
          });
          
        });
        
}