import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "./services/authentication.service";

import { User } from "./models/user.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loading = true;
  anon: boolean;
  user: User;
  isInsideProfile = false;

  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authentication.userChange$.subscribe((user) => {
      this.loading = false;
      this.user = user;
      this.anon = !user;
    });
    this.user = this.authentication.getUser();
  }

  logout() {
    this.isInsideProfile = false;
    this.authentication.logout()
      .subscribe(() => this.router.navigate(["/index"]));
  }

  hideProfile () {
    // this.isInsideProfile = true;
  }

  showProfile () {
    this.isInsideProfile = false;
  }
}
