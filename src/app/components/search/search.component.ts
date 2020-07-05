import { Component, OnInit } from "@angular/core";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  chambers = [
    { displayText: "House", value: "house" },
    { displayText: "Senate", value: "senate" },
	];
	searchForm = this.fb.group({
		selectedCongress:[''],
		selectedChamber:['']
	})
	
  constructor(private fb:FormBuilder) {}

  ngOnInit() {}
}
