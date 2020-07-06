import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchComponent } from "./search.component";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit when doReset is called", () => {
    spyOn(component.reset, "emit");
    component.doReset();
    expect(component.reset.emit).toHaveBeenCalled();
  });

  it("should emit when doSearch is called", () => {
    component.searchForm.patchValue({ searchOption: "Only 4" });
    component.searchForm.patchValue({ searchValue: "Testing" });

    const expected = { searchValue: "Testing", searchOption: "Only 4" };
    spyOn(component.search, "emit");
    component.doSearch();
    expect(component.search.emit).toHaveBeenCalledWith(expected);
  });

  it("should call doReset when reset button is clicked", () => {
    spyOn(component, "doReset");
    component.searchForm.patchValue({ searchOption: "Only 4" });
    component.searchForm.patchValue({ searchValue: "Testing" });
    const buttons = fixture.debugElement.queryAll(By.css("button"));
    const resetButton = buttons[0].nativeElement;
    resetButton.click();
    fixture.detectChanges();
    expect(component.doReset).toHaveBeenCalled();
  });
});
