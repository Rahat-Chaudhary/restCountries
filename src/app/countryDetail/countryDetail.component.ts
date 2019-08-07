import { ActivatedRoute } from "@angular/router";
import { CountriesService } from "./../services/countries.service";
import { Component, OnInit } from "@angular/core";
import { flatMap } from "rxjs/operators";
import { Country } from "../services/types/country";

@Component({
  selector: "app-countryDetail",
  templateUrl: "./countryDetail.component.html",
  styleUrls: ["./countryDetail.component.css"]
})
export class CountryDetailComponent implements OnInit {
  country: Country;
  constructor(
    private service: CountriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(flatMap(params => this.service.getByName(params.name)))
      .subscribe({
        next: country => {
          this.country = country[0];
        }
      });
    /*
    combineLatest([
      this.route.paramMap //,this.route.queryParamMap
    ])
      .pipe(
        switchMap(combined => {
          let name = combined[0].get("name");
          return this.service.getByName(name);
        })
      )
      .subscribe(country => {
        this.country = country[0];
      });
      */
  }
}
