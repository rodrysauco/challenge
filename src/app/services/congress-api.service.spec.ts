import { TestBed } from "@angular/core/testing";

import { CongressApiService } from "./congress-api.service";
import { HttpClientModule } from "@angular/common/http";
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import {
  mockTransformedCongressMember,
  mockCongressMember,
} from "../mocks/mock-congress-member";
import { SpinnerService } from "../shared/services/spinner.service";

describe("CongressApiService", () => {
  let congressService: CongressApiService;
  const spinner = jasmine.createSpyObj("SpinnerService", ["display"]);
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CongressApiService, SpinnerService],
    });
    congressService = TestBed.get(CongressApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("should be created", () => {
    const service: CongressApiService = TestBed.get(CongressApiService);
    expect(service).toBeTruthy();
  });

  it("should call api and get transformed response", () => {
    const expected = mockTransformedCongressMember;
    const id = expected.id;
    congressService.getSpecificMember(id).subscribe((data) => {
      expect(data).toEqual(expected);
    });

    const request = httpMock.expectOne(
      `${congressService.baseUrl}/members/${id}.json`
    );
    expect(request.request.method).toBe("GET");
    request.flush(mockCongressMember);
  });
});
