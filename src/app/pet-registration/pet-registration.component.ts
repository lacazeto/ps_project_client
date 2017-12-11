import { Component, OnInit } from "@angular/core";
import { ConnectApiService } from "../services/connect-api.service";

@Component({
  selector: "app-pet-registration",
  templateUrl: "./pet-registration.component.html",
  styleUrls: ["./pet-registration.component.css"]
})
export class PetRegistrationComponent implements OnInit {

  pet = {
    name: "",
    type: ""
  };

  constructor(private connectApiService: ConnectApiService) { }

  ngOnInit() {
  }

  createPet () {
    this.connectApiService.registerPet(this.pet)
    .subscribe(
      () => ,
      (err) => console.log(err)
    );
  }
}
