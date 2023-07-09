import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private baseURL = "http://localhost:8081";
  constructor(private http:HttpClient) { }

  public getCompanyRiskScore(){
    return this.http.get(this.baseURL+"/risk-score");
  }

  public getRiskDimension(){
    return this.http.get(this.baseURL+"/risk-dimension");
  }

  public getRiskCalcLogic(){
    return this.http.get(this.baseURL+"/risk-calc-logic");
  }

  public getRiskScoreLevel(){
    return this.http.get(this.baseURL+"/risk-score-level");
  }

  public getScoreCap(){
    return this.http.get(this.baseURL+"/score-cap");
  }


}
