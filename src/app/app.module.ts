// - Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from "./app.component";
import { ProfileComponent } from './pages/profile/profile.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

/* const routes: Routes = [
  { path: "", redirectTo: "/journal", pathMatch: "full" },
  { path: "journal",  component: PageJournalComponent },
  { path: "journal/:id", component: PageJournalDetailComponent }
]; */

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
