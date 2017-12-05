// - Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from "./app.component";

/* const routes: Routes = [
  { path: "", redirectTo: "/journal", pathMatch: "full" },
  { path: "journal",  component: PageJournalComponent },
  { path: "journal/:id", component: PageJournalDetailComponent }
]; */

@NgModule({
  declarations: [
    AppComponent
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
