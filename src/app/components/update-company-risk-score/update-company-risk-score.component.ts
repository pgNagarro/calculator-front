import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyRiskScore } from 'src/app/models/companyRiskScore';
import { CompanyRiskScoreService } from 'src/app/services/company-risk-score.service';

@Component({
  selector: 'app-update-company-risk-score',
  templateUrl: './update-company-risk-score.component.html',
  styleUrls: ['./update-company-risk-score.component.css']
})
export class UpdateCompanyRiskScoreComponent implements OnInit {

  companyName:string;
  companyRiskScore: CompanyRiskScore;

  constructor(private service:CompanyRiskScoreService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
      this.companyName = this.route.snapshot.params['companyName'];
      this.service.getRiskScoreByCompanyName(this.companyName).subscribe(data=>{
        this.companyRiskScore=data;
      },error=>console.log(error));
  }
  onSubmit(){
    this.service.updateRiskScore(this.companyName,this.companyRiskScore).subscribe(data=>{
      this.router.navigate(['/view']);
    });
  }
}
