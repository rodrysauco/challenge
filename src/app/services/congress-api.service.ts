import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { SpinnerService } from "../shared/services/spinner.service";

@Injectable({
  providedIn: "root",
})
export class CongressApiService {
  baseUrl = "https://api.propublica.org/congress/v1";

  constructor(
    private http: HttpClient,
    private spinnerService: SpinnerService
  ) {}

  getAllMembers(): Observable<any> {
    this.spinnerService.display(true);
    const url = `${this.baseUrl}/115/senate/members.json`;
    return this.http
		.get(url)
		.pipe(tap(() => this.spinnerService.display(false)));
  }
	
  getSpecificMember(id): Observable<any> {
		this.spinnerService.display(true);
		const url = `${this.baseUrl}/members/${id}.json`;
    return this.http
      .get(url)
      .pipe(tap(()=> this.spinnerService.display(false)),
				map((response) => this.transformSpecificMember(response)));
  }

  transformSpecificMember(response) {
    return response.results[0];
  }
}
