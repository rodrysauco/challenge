import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";
import { SpinnerService } from "../shared/services/spinner.service";

@Injectable({
  providedIn: "root",
})
export class CongressApiService {
  myData: any;
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
        map((response) => this.transformMembers(response)),
        catchError(this.handleError)
      );
    }
  }

  getSpecificMember(id): Observable<any> {
    this.spinnerService.display(true);
    const url = `${this.baseUrl}/members/${id}.json`;
    return this.http.get(url).pipe(
      tap(() => this.spinnerService.display(false)),
      map((response) => this.transformSpecificMember(response)),
      catchError(this.handleError)
    );
  }

  transformMembers(response) {
    let transformedResponse;
    if (response.status === "OK") {
      transformedResponse = response.results[0].members;
      this.myData = transformedResponse;
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

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occured:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError("There was an error, please try again");
  }
}
