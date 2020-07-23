import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { Profiled } from './profiled';
import { Name } from './name';
import { InsertMed } from './insertMed';
import { Donate } from './donate';
import { InsertReq } from './insertReq';
import { Description } from './description';
import { Complain } from './complain';

@Injectable({
  providedIn: 'root'
})

export class MedicineService {
    public em:string = '';
    public fn:String = '';
    public mn:String = '';
    public ln:String = '';
    
    profile:Profiled;
    insertM:InsertMed;
    donate:Donate;
    name:Name;
    insertR:InsertReq;
   
  constructor(private http:HttpClient) { 
   
    
  } 
    
    

  availabeMed():Observable<Donate[]>{
    return this.http.get<Donate[]>('http://localhost:80/medicine/availabeMed.php');
  }
  medSearch(medicineName):Observable<any>{
    return this.http.get<any>('http://localhost:80/medicine/searchMed.php?medicineName='+medicineName);
  }
   donatelist(em):Observable<Donate[]>{
    return this.http.get<Donate[]>('http://localhost:80/medicine/donateList.php?email='+em);
   }
   requestlist(em):Observable<Donate[]>{
    return this.http.get<Donate[]>('http://localhost:80/medicine/requestList.php?email='+em);
   }
   insertRequest(insertR){
    return this.http.post('http://localhost:80/medicine/insertRequest.php',insertR,{responseType: 'text'});
   }
   insertMedicine(insertM){
    return this.http.post('http://localhost:80/medicine/insertM.php',insertM);
   }
   userDetails(em):Observable<Profiled[]>{
     return this.http.get<Profiled[]>('http://localhost:80/medicine/user.php?email='+em);
   }
   userName(em):Observable<Name[]>{
    return this.http.get<Name[]>('http://localhost:80/medicine/name.php?email='+em);
  }
  getRegister(){
    return this.http.get<User[]>('http://localhost:80/medicine/list.php');
  }
  
   insertUser(user:User)
   {
     return this.http.post('http://localhost:80/medicine/insert.php',user);
   }

   delete(email:string){
    return this.http.delete<User[]>('http://localhost:80/medicine/delete.php?email=' +email);
   }

   checkUser(loginData):Observable<User>
   {
    return this.http.post<User>('http://localhost:80/medicine/check.php',loginData);
   }
  
   test(em):Observable<Blob>{
    return this.http.get('http://localhost:80/medicine/test.php?email='+em,{ responseType: 'blob' });
  }
  
  postImage(fd : FormData): Observable<string>{
    
    return this.http.post<string>('http://localhost:80/medicine/uploadImage.php' , fd);
  }


   removeImage(em){
    return this.http.get('http://localhost:80/medicine/removeImg.php?email=' +em);
   }


   medDes(nm:string):Observable<Description[]>{
    return this.http.get<Description[]>('http://localhost:80/medicine/description.php?medicineName='+nm);
   }

   complain(complain:Complain){
     return this.http.post('http://localhost:80/medicine/complain.php',complain);
   }
}
