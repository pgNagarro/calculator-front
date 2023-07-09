import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RiskCalc } from '../models/riskCalc';

@Injectable({
  providedIn: 'root'
})
export class RiskcalcService {

  private baseURL = "http://localhost:8081";
  constructor(private http:HttpClient) { }

  addRiskCalc(riskCalc: RiskCalc): Observable<Object>{
    return this.http.post(this.baseURL+"/addRiskCalcLogic",riskCalc);
  }

  getRiskCalcByElementName(elementName:string):Observable<RiskCalc>{
      return this.http.get<RiskCalc>(this.baseURL+"/risk-calc-logic/"+elementName);
  }

  updateRiskCalc(elementName:string,riskCalc:RiskCalc):Observable<Object>{
    return this.http.put(this.baseURL+"/risk-calc-logic/"+elementName,riskCalc);
  }

  deleteRiskCalc(elementName:string):Observable<Object>{
    return this.http.delete(this.baseURL+"/risk-calc-logic/"+elementName);
  }
}
