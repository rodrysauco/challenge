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
  data: Array<any>;
  filteredData: Array<any>;
  constructor(
    private congressService: CongressApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.congressService.getAllMembers().subscribe((response) => {
      this.data = response;
      this.filteredData = this.data;
    });
  }

  showMemberInfo(memberId) {
    this.router.navigate([`/results/${memberId}`]);
  }

  handleSearch(params) {
    switch (params.searchOption) {
      case "name":
        this.filterByName(params.searchValue);
        break;
      case "title":
        this.filterByTitle(params.searchValue);
        break;
      case "gender":
        this.filterByGender(params.searchValue);
        break;
      case "party":
        this.filterByParty(params.searchValue);
        break;
    }
  }

  handleReset() {
    this.filteredData = this.data;
  }

  filterByGender(gender: string) {
    this.filteredData = this.data.filter((member) => member.gender === gender);
  }

  filterByTitle(title: string) {
    this.filteredData = this.data.filter((member) =>
      member.title.toLowerCase().includes(title.toLowerCase())
    );
  }
  filterByName(name: string) {
    this.filteredData = this.data.filter((member) => {
      const fullName = `${member.first_name} ${member.last_name}`;
      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return member;
      }
    });
  }
  filterByParty(party: string) {
    this.filteredData = this.data.filter((member) => member.party === party);
  }
}
