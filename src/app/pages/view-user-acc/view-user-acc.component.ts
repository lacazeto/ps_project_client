import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { ActivatedRoute } from "@angular/router";
import { ConnectApiService } from "../../services/connect-api.service";


@Component({
  selector: "app-view-user-acc",
  templateUrl: "./view-user-acc.component.html",
  styleUrls: ["./view-user-acc.component.css"]
})
export class ViewUserAccComponent implements OnInit {

  user = null;
  userPets: Array<{}> = null;
  userProfile = null;

  constructor(private authentication: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private connectApiService: ConnectApiService) { }

  updateInfo() {
    this.activatedRoute.params
    .subscribe((params) => {
      this.connectApiService.getUserPets(params.id)
      .then((result) => {
        this.userPets = result;
      });
    });
  }

  getUserData () {
    this.activatedRoute.params
    .subscribe((params) => {
      this.connectApiService.getUserProfile(params.id)
        .then((result) => {
          this.userProfile = result;
        });
    });
  }

  ngOnInit() {
    this.user = this.authentication.getUser();
    this.updateInfo();
    this.getUserData();
  }

}
