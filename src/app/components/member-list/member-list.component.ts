import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.scss"],
})
export class MemberListComponent implements OnInit {
  @Input() memberList: Array<any>;
  @Output() selectedMember = new EventEmitter();
  @Output() search = new EventEmitter();
  @Output() reset = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onSearch(params) {
    this.search.emit(params);
  }

  onReset() {
    this.reset.emit();
  }

  handleSelect(memberId) {
    this.selectedMember.emit(memberId);
  }
}
