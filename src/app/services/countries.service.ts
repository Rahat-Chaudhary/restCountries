import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  
  constructor(private  http : HttpClient) { }

  

  getAll(){
    let headers = new HttpHeaders({
      'x-rapidapi-host':  'restcountries-v1.p.rapidapi.com',
      'x-rapidapi-key': '223126fc80mshd7ba148f4d136adp17b160jsn537936d3c1c1'
    });
    
   
    return this.http.get('https://restcountries-v1.p.rapidapi.com/all', { headers: headers })
    .pipe(
      map(response => response)
      //catchError(this.handleError)
    );
  }

  getByName(name){
    let headers = new HttpHeaders({
      'x-rapidapi-host':  'restcountries-v1.p.rapidapi.com',
      'x-rapidapi-key': '223126fc80mshd7ba148f4d136adp17b160jsn537936d3c1c1'
    });
    
   
    return this.http.get('https://restcountries-v1.p.rapidapi.com/name'+'/'+name, { headers: headers })
    .pipe(
      map(response => response)
      //catchError(this.handleError)
    );
  }

}
