import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MemberListComponent } from "./member-list.component";
import { Component, Input } from "@angular/core";
import { By } from "@angular/platform-browser";

@Component({
  selector: "app-member-list-item",
  template: "<p>Member list item Work!</p>",
})
class MockedMemberListItemComponent {
  @Input() member;
}
@Component({
  selector: "app-search",
  template: "<p>Search Work!</p>",
})
class MockedSearchComponent {}

describe("MemberListComponent", () => {
  let component: MemberListComponent;
  let fixture: ComponentFixture<MemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MemberListComponent,
        MockedMemberListItemComponent,
        MockedSearchComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit when handleSelect is called", () => {
    const test = "003";
    spyOn(component.selectedMember, "emit");
    component.handleSelect(test);
    expect(component.selectedMember.emit).toHaveBeenCalledWith(test);
  });

  it("should emit when onReset is called", () => {
    spyOn(component.reset, "emit");
    component.onReset();
    expect(component.reset.emit).toHaveBeenCalled();
  });

  it("should emit when onSearch is called", () => {
    const test = "Testing";
    spyOn(component.search, "emit");
    component.onSearch(test);
    expect(component.search.emit).toHaveBeenCalledWith(test);
  });

  it("should display no data found message", () => {
    component.memberList = [];
    fixture.detectChanges();
    const element = fixture.debugElement.query(
      By.css(".member-list__body-empty")
    );
    expect(element).toBeDefined();
  });
});
