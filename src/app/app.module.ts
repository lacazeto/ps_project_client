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
import { PlaceComponent } from "./pages/place/place.component";
import { PlaceCreationComponent } from "./pages/place-creation/place-creation.component";
import { ViewUserAccComponent } from "./pages/view-user-acc/view-user-acc.component";

import { AppComponent } from "./app.component";
import { PetRegistrationComponent } from "./pet-registration/pet-registration.component";

const routes: Routes = [
  { path: "", redirectTo: "/index", pathMatch: "full" },
  { path: "index",  component: IndexComponent, pathMatch: "full" },
  { path: "auth/login", component: LoginComponent, pathMatch: "full" },
  { path: "auth/signup", component: SignupComponent, pathMatch: "full" },
  { path: "place/:id", component: PlaceComponent, pathMatch: "full" },
  { path: "profile/:id", component: ProfileComponent, pathMatch: "full" },
  { path: "places/register", component: PlaceCreationComponent, pathMatch: "full" },
  { path: "user/:id", component: ViewUserAccComponent, pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    PlaceComponent,
    PetRegistrationComponent,
    PlaceCreationComponent,
    ViewUserAccComponent
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
