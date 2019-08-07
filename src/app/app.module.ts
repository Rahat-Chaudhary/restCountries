import { CountryDetailComponent } from "./countryDetail/countryDetail.component";
import { CountriesService } from "./services/countries.service";
import { NotFoundComponent } from "./not-found/not-found.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { MatCardModule } from "@angular/material/card";

import { AppComponent } from "./app.component";
import { CountriesComponent } from "./countries/countries.component";
import { CountryComponent } from "./country/country.component";

const routes: Routes = [
  {
    path: "",
    component: CountriesComponent
  },
  {
    path: "countries",
    component: CountriesComponent
  },
  {
    path: "country/:name",
    component: CountryDetailComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    NotFoundComponent,
    CountryDetailComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
