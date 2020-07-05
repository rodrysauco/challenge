import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpInterceptor } from "./services/interceptor";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { ChamberComponent } from "./containers/chamber/chamber.component";
import { SearchComponent } from "./components/search/search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { MemberListComponent } from "./components/member-list/member-list.component";
import { MemberListItemComponent } from "./components/member-list-item/member-list-item.component";
import { MoreDetailsComponent } from "./containers/more-details/more-details.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SpinnerComponent } from "./shared/spinner/spinner.component";

@NgModule({
  declarations: [
    AppComponent,
    ChamberComponent,
    FooterComponent,
    HeaderComponent,
    MemberListItemComponent,
    MemberListComponent,
    SearchComponent,
    MoreDetailsComponent,
    NotFoundComponent,
    SpinnerComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [HttpInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
