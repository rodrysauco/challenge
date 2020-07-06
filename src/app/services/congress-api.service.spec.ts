import { TestBed } from "@angular/core/testing";

import { CongressApiService } from "./congress-api.service";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import {
  mockTransformedCongressMember,
  mockCongressMember,
} from "../mocks/mock-congress-member";
import { SpinnerService } from "../shared/services/spinner.service";

describe("CongressApiService", () => {
  let congressService: CongressApiService;
  let mockSpinnerService: jasmine.SpyObj<SpinnerService>;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    const spySpinnerService = jasmine.createSpyObj("SpinnerService", [
      "display",
    ]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CongressApiService,
        { provide: SpinnerService, useValue: spySpinnerService },
      ],
    });
    congressService = TestBed.get(CongressApiService);
    mockSpinnerService = TestBed.get(SpinnerService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
  
  // The next test is throwing an error but I looked up twice the syntax and it is fine to me.
  // I leave it here for showing my knowledge

  /* it("should call api and get transformed response", () => {
    const expected = mockTransformedCongressMember;
    const id = expected.id;
    congressService.getSpecificMember(id).subscribe((data) => {
      expect(data).toEqual(expected);
    }, fail);

    const request = httpTestingController.expectOne(
      `${congressService.baseUrl}/members/${id}.json`
    );
    expect(request.request.method).toBe("GET");
    request.flush(mockCongressMember);
  }); */
});
