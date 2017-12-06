// - Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

// - Services
import { ConnectApiService } from "./services/connect-api.service";
import { AuthenticationService } from "./services/authentication.service";

// - Pages
import { ProfileComponent } from "./pages/profile/profile.component";
import { IndexComponent } from "./pages/index/index.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";

import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "", redirectTo: "/index", pathMatch: "full" },
  { path: "index",  component: IndexComponent },
  { path: "auth/login", component: LoginComponent },
  { path: "auth/signup", component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ConnectApiService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
