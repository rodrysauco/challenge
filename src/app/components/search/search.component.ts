import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter();
  @Output() reset = new EventEmitter();

  options = [
    { displayText: "Title", value: "title" },
    { displayText: "Name", value: "name" },
    { displayText: "Gender", value: "gender" },
    { displayText: "Party", value: "party" },
  ];
  genders = [
    { displayText: "Male", value: "M" },
    { displayText: "Female", value: "F" },
  ];
  parties = [
    { displayText: "Democratic", value: "D" },
    { displayText: "Republican", value: "R" },
  ];

  searchForm = this.fb.group({
    searchOption: ["", Validators.required],
    searchValue: ["", Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  cleanFormField() {
    this.searchForm.patchValue({ searchValue: "" });
  }

  get optionSelected() {
    return this.searchForm.get("searchOption").value;
  }

  doReset() {
    this.reset.emit();
  }
  doSearch() {
    this.search.emit(this.searchForm.value);
  }
}
