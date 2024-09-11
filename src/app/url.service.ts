import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  baseUrl = "localhost:4200";
  dashboardUrl = this.baseUrl + "/dashboard";

}
