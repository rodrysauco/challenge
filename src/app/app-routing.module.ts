import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChamberComponent } from "./containers/chamber/chamber.component";
import { MoreDetailsComponent } from "./containers/more-details/more-details.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/results", pathMatch: "full" },
  { path: "results/:id", component: MoreDetailsComponent },
  { path: "results", component: ChamberComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
