import { CountriesService } from "./../services/countries.service";
import { Component, OnInit } from "@angular/core";
import { Country } from "../services/types/country";
import { Observable } from "rxjs";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"]
})
export class CountriesComponent implements OnInit {
  countries$: Observable<Country>;

  constructor(private service: CountriesService) {}

  ngOnInit() {
    this.countries$ = this.service.getAll();
  }
}
