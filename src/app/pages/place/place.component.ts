import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";
import { ConnectApiService } from "../../services/connect-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-place",
  templateUrl: "./place.component.html",
  styleUrls: ["./place.component.css"]
})
export class PlaceComponent implements OnInit {

  place: {} = null;
  user = null;
  today = new Date();
  dd = null;
  mm = null;
  yyyy = null;

  request: {} = {
    startDate: null,
    endDate: null,
    owner: "",
    host: ""
  };

  constructor(private authentication: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private connectApiService: ConnectApiService,
    private router: Router) { }

  ngOnInit() {
    this.user = this.authentication.getUser();

    this.activatedRoute.params
    .subscribe((params) => {
     this.connectApiService.getPlace(params.id)
      .then(place => {
        // populating variables
        this.dd = this.today.getDate();
        this.mm = this.today.getMonth() + 1;
        this.yyyy = this.today.getFullYear();
        this.place = place;
      });
    });
  }

  createRequest () {
    // todo
    this.connectApiService.sendRequest(this.request)
      .then(() => this.router.navigate(["/profile", this.user._id]));
  }

}
