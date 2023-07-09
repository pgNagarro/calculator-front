import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RiskScoreLevel } from 'src/app/models/riskScoreLevel';
import { RiskscorelevelService } from 'src/app/services/riskscorelevel.service';

@Component({
  selector: 'app-add-riskscorelevel',
  templateUrl: './add-riskscorelevel.component.html',
  styleUrls: ['./add-riskscorelevel.component.css']
})
export class AddRiskscorelevelComponent implements OnInit {

  riskScoreLevel : RiskScoreLevel = new RiskScoreLevel();
  constructor(private service:RiskscorelevelService,private router:Router) { }

  ngOnInit(): void {
  }

  saveRiskScoreLevel(){
    this.service.addRiskScoreLevel(this.riskScoreLevel).subscribe((data)=>{
      
      console.log(data);
      this.goToView();
    },error=>console.error(error));    
  }

  goToView(){
      this.router.navigate(['/view']);
  }

  onSubmit(){
    console.log(this.riskScoreLevel);
    this.saveRiskScoreLevel();
  }

}
