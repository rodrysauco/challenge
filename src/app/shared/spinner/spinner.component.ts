import { Component, OnInit } from "@angular/core";
import { SpinnerService } from "../services/spinner.service";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
})
export class SpinnerComponent implements OnInit {
  isLoading: boolean;
  pendingRequests = 0;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit() {
    this.spinnerService.status.subscribe((displayValue: boolean) =>
      this.setIsLoading(displayValue)
    );
  }

  setIsLoading(displayValue: boolean) {
    const value = displayValue ? 1 : -1;
    this.pendingRequests += value;
    if (this.pendingRequests < 0) {
      this.pendingRequests = 0;
    }
    this.isLoading = this.pendingRequests > 0;
  }
}
