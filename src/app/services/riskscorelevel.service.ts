import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RiskScoreLevel } from '../models/riskScoreLevel';

@Injectable({
  providedIn: 'root'
})
export class RiskscorelevelService {

  private baseURL = "http://localhost:8081";
  constructor(private http:HttpClient) { }

  addRiskScoreLevel(riskScoreLevel: RiskScoreLevel): Observable<Object>{
    return this.http.post(this.baseURL+"/addRiskScoreLevel",riskScoreLevel);
  }

  
  getRiskScoreLevelByScore(score:string):Observable<RiskScoreLevel>{
    return this.http.get<RiskScoreLevel>(this.baseURL+"/risk-score-level/"+score);
}

updateRiskScoreLevel(score:string,riskScoreLevel:RiskScoreLevel):Observable<Object>{
  return this.http.put(this.baseURL+"/risk-score-level/"+score,riskScoreLevel);
}

deleteRiskScoreLevel(score:string):Observable<Object>{
  return this.http.delete(this.baseURL+"/risk-score-level/"+score);
}
}
