import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MoreDetailsComponent } from "./more-details.component";
import { MatCardModule, MatSnackBarModule } from "@angular/material";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { mockTransformedCongressMember } from "../../../mocks/mock-congress-member";
import { of } from "rxjs";
import { CongressApiService } from "src/app/services/congress-api.service";

class CongressServiceSpy {
  resultMock = mockTransformedCongressMember;
  getSpecificMember = jasmine
    .createSpy("getSpecificMember")
    .and.callFake((params) => of(this.resultMock));
}

describe("MoreDetailsComponent", () => {
  let component: MoreDetailsComponent;
  let fixture: ComponentFixture<MoreDetailsComponent>;
  let congressService: CongressServiceSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoreDetailsComponent],
      imports: [
        MatCardModule,
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
    fixture = TestBed.createComponent(MoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
