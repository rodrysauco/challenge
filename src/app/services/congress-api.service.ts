import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CongressApiService {
  baseUrl = "https://api.propublica.org/congress/v1/";

  constructor(private http: HttpClient) {}

  getAllMembers(congress: number, chamber: string): Observable<any> {
    const url = `${this.baseUrl}${congress}/${chamber}/members.json`;
    return this.http
      .get(url)
      .pipe((response) => this.transformMembers(response));
  }

  transformMembers(response): Observable<any> {
		return response.results;
	}
}
