import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Country } from "./types/country";

@Injectable({
  providedIn: "root"
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Country> {
    const headers = new HttpHeaders()
      .set("x-rapidapi-host", "restcountries-v1.p.rapidapi.com")
      .set(
        "x-rapidapi-key",
        "223126fc80mshd7ba148f4d136adp17b160jsn537936d3c1c1"
      );

    return this.http.get<Country>(
      "https://restcountries-v1.p.rapidapi.com/all",
      {
        headers
      }
    );
  }

  getByName(name: string): Observable<Country> {
    const headers = new HttpHeaders()
      .set("x-rapidapi-host", "restcountries-v1.p.rapidapi.com")
      .set(
        "x-rapidapi-key",
        "223126fc80mshd7ba148f4d136adp17b160jsn537936d3c1c1"
      );

    // Use these params if api accepts params in format like {host}:{port}/{path}?param=data&param2=data2 etc.
    // const params = new HttpParams().set("name", name);

    return this.http.get<Country>(
      `https://restcountries-v1.p.rapidapi.com/name/${name}`,
      {
        headers
      }
    );
  }
}
