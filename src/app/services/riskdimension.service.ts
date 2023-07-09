import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dimensions } from '../models/dimensions';
import { RiskDimension } from '../models/riskDimension';

@Injectable({
  providedIn: 'root'
})
export class RiskdimensionService {

  private baseURL = "http://localhost:8081";
  constructor(private http:HttpClient) { }

  addRiskDimension(riskDimension: RiskDimension): Observable<Object>{
    return this.http.post(this.baseURL+"/addRiskDimension",riskDimension);
  }

  getRiskDimensionByDimension(dimension:string):Observable<RiskDimension>{
    return this.http.get<RiskDimension>(this.baseURL+"/risk-dimension/"+dimension);
}

updateRiskDimension(dimension:string,riskDimension:RiskDimension):Observable<Object>{
  return this.http.put(this.baseURL+"/risk-dimension/"+dimension,riskDimension);
}

deleteRiskDimension(dimension:string):Observable<Object>{
  return this.http.delete(this.baseURL+"/risk-dimension/"+dimension);
}
}
