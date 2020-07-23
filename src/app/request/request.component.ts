import { Component, OnInit } from "@angular/core";
import { MedicineService } from "../medicine.service";
import { Name } from "../name";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Donate } from "../donate";
import { Router } from "@angular/router";
import * as $ from "jquery";
import { Description } from "../description";
declare const searchReset: any;
declare const getColumnValue: any;
declare let ctx: any;
@Component({
  selector: "app-request",
  templateUrl: "./request.component.html",
  styleUrls: ["./request.component.css"],
})
export class RequestComponent implements OnInit {
  nm: Name[];
  email: String = "";
  fname = "";
  mname = "";
  lname = "";
  requestForm: FormGroup;
  donat: Donate[];
  d: Donate[];
  desript: Description[];
  us: string[];
  se: string[];
  medicineName = "";
  description = "";
  uses = "";
  sideEffect = "";

  val: string = "";
  v: string = "";

  medName: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private medicineService: MedicineService
  ) {
    this.email = localStorage.getItem("email");

    this.create();
  }

  requestM() {
    const requestData = {
      email: localStorage.getItem("email"),
      medicineName: this.val,
      quantity: this.requestForm.controls.quantity.value,
      power: this.requestForm.controls.power.value,
    };
    this.medicineService.insertRequest(requestData).subscribe((data) => {});
    alert("Request Submited to portal!!");
    location.reload();
  }

  availableMedicine() {
    this.medicineService.availabeMed().subscribe((data: Donate[]) => {
      this.donat = data;
    });
  }

  search() {
    searchReset();
    this.medicineService
      .medSearch(this.requestForm.value.medicineName)
      .subscribe((data: any) => {
        if (data == "Medicine not available!!!") {
          $(".medicineDespription").css("visibility", "hidden");
          $("#requestDiv").css("visibility", "hidden");
          alert(data);
        } else {
          this.donat = data;
          $("#tb").css("visibility", "visible");
          $("#pa").css("visibility", "visible");
          $("#left").css("visibility", "visible");
          $(".medicineDespription").css("visibility", "hidden");
          $("#requestDiv").css("visibility", "hidden");
        }
      });
  }

  create() {
    this.requestForm = this.formBuilder.group({
      medicineName: [""],
      expiryDate: [""],
      quantity: [""],
      uses: [""],
      composition: [""],
      power: [""],
    });
  }
  OnInput(event) {
    this.val = event.target.value;
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  value() {
    getColumnValue();
  }

  valu() {
    this.medicineService.medDes(this.val).subscribe((data: Description[]) => {
      this.desript = data;
      this.medicineName = this.desript["medicineName"];
      this.description = this.desript["description"];
      this.uses = this.desript["uses"];
      this.us = this.uses.split(".");
      this.sideEffect = this.desript["sideEffect"];
      this.se = this.sideEffect.split(".");
    });
  }

  donate() {
    this.router.navigate(["donate"]);
  }

  ngOnInit() {
    this.medicineService.userName(this.email).subscribe((data: Name[]) => {
      this.nm = data;
      this.fname = this.nm["fname"];
      this.mname = this.nm["mname"];
      this.lname = this.nm["lname"];
    });

    this.medicineService.availabeMed().subscribe((data: Donate[]) => {
      this.d = data;
      for (let i = 0; i < this.d.length; i++) {
        this.medName[i] = this.d[i].medicineName;
      }
    });

    $(".available").click(function () {
      $("#tb").css("visibility", "visible");
      $("#pa").css("visibility", "visible");
      $("#left").css("visibility", "visible");
      $(".medicineDespription").css("visibility", "hidden");
      $("#requestDiv").css("visibility", "hidden");
    });

    var dt = new Date();
    document.getElementById("date").innerHTML = dt.toLocaleDateString();
    document.getElementById("time").innerHTML = dt.toLocaleTimeString();

    $("#des").click(function () {
      $(".medicineDespription").css("visibility", "visible");
      $("#tb").css("visibility", "hidden");
    });

    $("#request").click(function () {
      $(".medicineDespription").css("visibility", "hidden");
      $("#requestDiv").css("visibility", "visible");
    });
  }
}
