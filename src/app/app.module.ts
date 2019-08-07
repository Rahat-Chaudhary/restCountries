import { CountryDetailComponent } from './countryDetail/countryDetail.component';
import { CountriesService } from './services/countries.service';
import { NotFoundComponent } from './not-found/not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
   declarations: [
      AppComponent,
      CountriesComponent,
      NotFoundComponent,
      CountryDetailComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MatCardModule,
      RouterModule.forRoot([
        {
          path: '' , 
          component : CountriesComponent
        },
        {
          path: 'country/:name' , 
          component : CountryDetailComponent
        },
        {
          path: '**' , component : NotFoundComponent
        },
        
      ])
   ],
   providers: [CountriesService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
