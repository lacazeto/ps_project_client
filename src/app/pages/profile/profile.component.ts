import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { ActivatedRoute } from "@angular/router";
import { ConnectApiService } from "../../services/connect-api.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  isRegisterClicker = false;
  user = null;
  myPets: Array<{}> = null;

  constructor(private authentication: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private connectApiService: ConnectApiService) { }

  ngOnInit() {
    this.user = this.authentication.getUser();
    this.activatedRoute.params
    .subscribe((params) => {
      this.connectApiService.getPetsFromUser(params.id)
      .then((result) => {
        this.myPets = result;
      });
    });
  }

  registerPet () {
    this.isRegisterClicker = !this.isRegisterClicker;
  }

  delete () {
    this.connectApiService.deletePet()
      .then((res) => {})
      .catch((err) => {
          console.log(err);
        }
      );
  }

}
