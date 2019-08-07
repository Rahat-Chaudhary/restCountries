import { CountriesService } from './../services/countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  
  countries;

  constructor(private service : CountriesService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(countries => {
      this.countries = countries;
      console.log(this.countries);
    });
  }

}
