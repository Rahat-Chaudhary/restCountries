import { ActivatedRoute } from '@angular/router';
import { CountriesService } from './../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-countryDetail',
  templateUrl: './countryDetail.component.html',
  styleUrls: ['./countryDetail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country; 
  constructor(private service : CountriesService , private route : ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap
    // .subscribe(params => {
    //   let name = params.get('name');
    //   //console.log(name);

    //   this.service.getByName(name)
    //   .subscribe(country => {
    //     this.country = country[0];
    //     console.log(this.country);
    //   });

    // });

    combineLatest([
      this.route.paramMap //,this.route.queryParamMap
    ]).pipe(
      switchMap(combined =>{
        let name = combined[0].get('name');
        return this.service.getByName(name);
      })
    ).subscribe(country=>{
      this.country = country[0];
    });

  }

}
