import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChamberComponent } from "./chamber.component";
import { Component, Input } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material";

@Component({
  selector: "app-member-list",
  template: "<p>Member list Work!</p>",
})
class MockedMemberListComponent {
  @Input() memberList;
}

describe("ChamberComponent", () => {
  let component: ChamberComponent;
  let fixture: ComponentFixture<ChamberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChamberComponent, MockedMemberListComponent],
      imports: [RouterTestingModule, HttpClientModule, MatSnackBarModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
