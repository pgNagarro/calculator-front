import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyRiskScore } from '../models/companyRiskScore';

@Injectable({
  providedIn: 'root'
})
export class CompanyRiskScoreService {

  private baseURL = "http://localhost:8081";
  constructor(private http:HttpClient) { }

  addCompanyRiskScore(companyRiskScore:CompanyRiskScore):Observable<Object>{
      return this.http.post(this.baseURL+"/addRiskScore",companyRiskScore);
  }

  getRiskScoreByCompanyName(companyName:string):Observable<CompanyRiskScore>{
    return this.http.get<CompanyRiskScore>(this.baseURL+"/risk-score/"+companyName);
}

updateRiskScore(companyName:string,companyRiskScore:CompanyRiskScore):Observable<Object>{
  return this.http.put(this.baseURL+"/risk-score/"+companyName,companyRiskScore);
}

deleteRiskScore(companyName:string):Observable<Object>{
  return this.http.delete(this.baseURL+"/risk-score/"+companyName);
}
}
