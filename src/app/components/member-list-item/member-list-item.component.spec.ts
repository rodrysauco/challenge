import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MemberListItemComponent } from "./member-list-item.component";
import { mockCongressMember } from "../../../mocks/mock-congress-member";
import { By } from "@angular/platform-browser";

describe("MemberListItemComponent", () => {
  let component: MemberListItemComponent;
  let fixture: ComponentFixture<MemberListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberListItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberListItemComponent);
    component = fixture.componentInstance;
    component.member = mockCongressMember;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit when onClick is called", () => {
    const memberID = component.member.id;
    spyOn(component.select, "emit");
    component.onClick();
    expect(component.select.emit).toHaveBeenCalledWith(memberID);
  });

  it("should call onClick when item is clicked", () => {
    spyOn(component, "onClick");
    const element = fixture.debugElement.query(By.css(".member")).nativeElement;
    element.click();
    expect(component.onClick).toHaveBeenCalled();
  });
});
