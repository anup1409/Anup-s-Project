import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { ViewComponent } from "./view/view.component";
import { MainComponent } from "./main/main.component";
import { DoanteRequestComponent } from "./doante-request/doante-request.component";
import { LogoutComponent } from "./logout/logout.component";

import { ModalComponent } from "./modal/modal.component";
import { RequestComponent } from "./request/request.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "view",
    component: ViewComponent,
  },
  {
    path: "modal",
    component: ModalComponent,
  },
  {
    path: "main",
    component: MainComponent,
    // canActivate:[AuthsGuard]
  },
  {
    path: "donate",
    component: DoanteRequestComponent,
  },
  {
    path: "login/Signup",
    component: RegisterComponent,
  },
  {
    path: "request",
    component: RequestComponent,
  },
  {
    path: "profile",
    component: MainComponent,
    // canActivate:[AuthsGuard]
  },
  {
    path: "logout",
    component: LogoutComponent,
  },

  {
    path: "profile/create",
    component: DoanteRequestComponent,
  },
  {
    path: "**",
    component: HomeComponent,
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
