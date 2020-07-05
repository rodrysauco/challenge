import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { SpinnerService } from "../shared/services/spinner.service";

@Injectable({
  providedIn: "root",
})
export class CongressApiService {
  myData: Observable<any>
  baseUrl = "https://api.propublica.org/congress/v1";

  constructor(
    private http: HttpClient,
    private spinnerService: SpinnerService
  ) {}

  getAllMembers(): Observable<any> {
    this.spinnerService.display(true);
    if (this.myData) {
      this.spinnerService.display(false);
      return of(this.myData);
    } else {
      const url = `${this.baseUrl}/115/senate/members.json`;
      return this.http.get(url).pipe(
        tap(() => this.spinnerService.display(false)),
        map((response) => this.transformMembers(response))
      );
    }
  }

  getSpecificMember(id): Observable<any> {
    this.spinnerService.display(true);
    const url = `${this.baseUrl}/members/${id}.json`;
    return this.http.get(url).pipe(
      tap(() => this.spinnerService.display(false)),
      map((response) => this.transformSpecificMember(response))
    );
  }

  storeData(response) {
    this.myData = response;
  }

  transformMembers(response) {
    let transformedResponse;
    if (response.status === "OK") {
      transformedResponse = response.results[0].members;
    }
    return transformedResponse;
  }

  transformSpecificMember(response) {
    const data = response.results[0];
    this.replaceGender(data);
    this.replaceParty(data);
    return data;
  }

  replaceGender(data) {
    const gender = data.gender === "M" ? "Male" : "Female";
    data.gender = gender;
    return data;
  }

  replaceParty(data) {
    let party;
    switch (data.current_party) {
      case "D":
        party = "Democratic";
        break;
      case "R":
        party = "Republican";
        break;
      default:
        party = data.current_party;
        break;
    }
    data.current_party = party;
    return data;
  }
}
