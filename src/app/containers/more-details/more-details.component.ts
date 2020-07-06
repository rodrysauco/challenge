import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { CongressApiService } from "src/app/services/congress-api.service";
import { switchMap } from "rxjs/operators";
import { SpinnerService } from "src/app/shared/services/spinner.service";
import { MatSnackBar } from '@angular/material';
import { CongressMember } from 'src/app/models/congressMember';

@Component({
  selector: "app-more-details",
  templateUrl: "./more-details.component.html",
  styleUrls: ["./more-details.component.scss"],
})
export class MoreDetailsComponent implements OnInit {
  congressMember : CongressMember;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CongressApiService,
    private spinnerService: SpinnerService,
    private snackBar:MatSnackBar
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
    this.service.getSpecificMember(memberId).subscribe(
      (response) => (this.congressMember = response),
      (error) => {
        this.spinnerService.display(false);
        this.snackBar.open(error,'Close');
      }
    );
  }
}
