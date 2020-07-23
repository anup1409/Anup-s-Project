import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ViewComponent } from "./view/view.component";
import { HttpClientModule } from "@angular/common/http";
import { AddComponent } from "./add/add.component";
import { MedicineService } from "./medicine.service";
import { MainComponent } from "./main/main.component";
import { DoanteRequestComponent } from "./doante-request/doante-request.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthService } from "./auth.service";
import { UserService } from "./user.service";
import { AuthsGuard } from "./auths.guard";
import { ModalComponent } from "./modal/modal.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { RequestComponent } from "./request/request.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AboutComponent,
    ViewComponent,
    AddComponent,
    MainComponent,
    DoanteRequestComponent,
    LogoutComponent,
    ModalComponent,
    RequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
  ],
  providers: [AuthService, MedicineService, UserService, AuthsGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
