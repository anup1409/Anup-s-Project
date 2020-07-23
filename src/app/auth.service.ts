import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = false;
  user:User;
  constructor(private http:HttpClient) { }

 
  getUserDetails(loginData):Observable<User>
  {
   return this.http.post<User>('http://localhost:80/medicine/check.php',loginData);
  }
  get isLoggedIn(){
    return this.loggedInStatus;
  }
  setLoggedIn(value:boolean){
    this.loggedInStatus =value;
    localStorage.setItem('loggedIn','true');
  }

 

 
}
