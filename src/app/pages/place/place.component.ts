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

  place = null;
  user = null;
  placeOwner = null;

  // -- variables for request creation purposes --
  today = new Date();
  dd = null;
  mm = null;
  yyyy = null;
  isRequestAlreadySubmited = false;
  request = {
    startDate: null,
    endDate: null,
    owner: "",
    placeId: ""
  };
  // -- xx --

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
        if (place.requests && this.user) {
          for (let ix = 0; ix < place.requests.length; ix++) {
            if (this.user._id == place.requests[ix].owner) {
              this.isRequestAlreadySubmited = true;
            }
          }
        }
      })
      .then(place => {
        this.connectApiService.getUserProfile(this.place.owner)
          .then(owner => { this.placeOwner = owner; });
      });
    });


  }

  createRequest () {
    this.request.owner = this.user._id;
    this.request.placeId = this.place._id;
    this.connectApiService.sendRequest(this.request)
      .then(() => this.router.navigate(["/profile", this.user._id]));
  }

  cancelRequest () {
    this.connectApiService.cancelRequestSubmission({_id: this.user._id})
    .then(() => this.router.navigate(["/profile", this.user._id]));
}

}
