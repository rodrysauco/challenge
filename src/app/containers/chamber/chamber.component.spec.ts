import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChamberComponent } from "./chamber.component";
import { Component, Input } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { MatSnackBarModule } from "@angular/material";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { mockTransformedCongressMember } from "../../../mocks/mock-congress-member";
import { of } from "rxjs";
import { CongressApiService } from "src/app/services/congress-api.service";

@Component({
  selector: "app-member-list",
  template: "<p>Member list Work!</p>",
})
class MockedMemberListComponent {
  @Input() memberList;
}

class CongressServiceSpy {
  resultsMock = [mockTransformedCongressMember];
  getAllMembers = jasmine
    .createSpy("getAllMembers")
    .and.callFake((params) => of(this.resultsMock));
}

describe("ChamberComponent", () => {
  let component: ChamberComponent;
  let fixture: ComponentFixture<ChamberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChamberComponent, MockedMemberListComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
      ],
      providers: [
        { provide: CongressApiService, useClass: CongressServiceSpy },
      ],
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
