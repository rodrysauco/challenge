import { Component, OnInit } from "@angular/core";
import { CongressApiService } from "src/app/services/congress-api.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-chamber",
  templateUrl: "./chamber.component.html",
  styleUrls: ["./chamber.component.scss"],
})
export class ChamberComponent implements OnInit {
  data: Observable<any>;
  constructor(
    private congressService: CongressApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.congressService
      .getAllMembers()
      .subscribe((response) => (this.data = response));
  }

  showMemberInfo(memberId) {
    this.router.navigate([`/results/${memberId}`]);
	}
	
}
