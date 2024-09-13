import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  baseUrl = "localhost:4200";

  //** Router Links **//
  dashboardUrl = "/dashboard";

  //** Full URLs **//
  fullDashboardUrl = `${this.baseUrl}+${this.dashboardUrl}`;
}
