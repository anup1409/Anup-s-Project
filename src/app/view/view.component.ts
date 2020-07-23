import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { User } from '../user';
import { Router} from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   user:User[];
   
  constructor( private registerService:MedicineService,
              private router:Router) { }

  ngOnInit() {
    this.registerService.getRegister()
    .subscribe((data : User[])=>{
    this.user=data;
    console.log(this.user);
    });
  }
  delete(user:User){
    console.log(user.email);
    this.registerService.delete(user.email)
    .subscribe(data=>{
      this.user=this.user.filter(u=>u!==user);
       });
       alert("Deleted");
       location.reload();
    }
 
}
