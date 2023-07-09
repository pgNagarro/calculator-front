import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyRiskScore } from 'src/app/models/companyRiskScore';
import { Dimensions } from 'src/app/models/dimensions';
import { CompanyRiskScoreService } from 'src/app/services/company-risk-score.service';

@Component({
  selector: 'app-add-riskscore',
  templateUrl: './add-riskscore.component.html',
  styleUrls: ['./add-riskscore.component.css']
})
export class AddRiskscoreComponent implements OnInit {

  companyRiskScore: CompanyRiskScore;

  
  
  constructor(private service:CompanyRiskScoreService, private router:Router) { }

  ngOnInit(): void {
     
  }

  saveCompanyRiskScore(){
    let riskScoreForm = document.getElementById('riskScoreForm') as HTMLFormElement;
    let companyName = document.getElementById('companyName') as HTMLFormElement;
    let dimensionName = document.getElementById('dimensionName') as HTMLFormElement;
    let dimensionValue = document.getElementById('dimensionValue') as HTMLFormElement;

   let cname = companyName.value;
   if(!this.companyRiskScore){
     this.companyRiskScore = new CompanyRiskScore(cname);
   }
  
   let dname = dimensionName.value;
   let dvalue = dimensionValue.value;

   

   let dimensions = new Dimensions(dname,dvalue);
   this.companyRiskScore.addDimensions(dimensions);
   
    this.service.addCompanyRiskScore(this.companyRiskScore).subscribe(data=>{
      console.log(this.companyRiskScore);
      console.log(data);
      this.goToView();
    },error=>console.error(error)); 
  }

  goToView(){
    this.router.navigate(['/view']);
  }

  onSubmit(){
    this.saveCompanyRiskScore();
  }
}
