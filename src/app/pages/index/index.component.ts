import { Component, OnInit } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { ConnectApiService } from "../../services/connect-api.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  places: Promise<string> = null;

  constructor(private connectApiService: ConnectApiService) { }

  ngOnInit() {
    this.places = this.connectApiService.getRandomPlaces();
  }


}
