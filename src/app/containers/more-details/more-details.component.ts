import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { CongressApiService } from "src/app/services/congress-api.service";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-more-details",
  templateUrl: "./more-details.component.html",
  styleUrls: ["./more-details.component.scss"],
})
export class MoreDetailsComponent implements OnInit {
  congressMember;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CongressApiService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.searchMember(params.get("id"));
    });
  }

  goBackToList() {
    this.router.navigate(["/results"]);
  }

  searchMember(memberId) {
    this.service
      .getSpecificMember(memberId)
      .subscribe((response) => (this.congressMember = response));
  }
}
