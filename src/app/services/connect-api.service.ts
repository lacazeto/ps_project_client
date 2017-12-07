import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ConnectApiService {

  baseUrl = "http://localhost:3000";

  constructor(private http: Http) { }

  getRandomPlaces (): Promise<string>  {
    return this.http.get(this.baseUrl + "/places")
      .toPromise()
      .then((res: Response) => res.json())
      .catch((err) => err.json().message);
  }

}