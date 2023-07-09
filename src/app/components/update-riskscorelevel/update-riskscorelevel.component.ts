import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RiskScoreLevel } from 'src/app/models/riskScoreLevel';
import { RiskscorelevelService } from 'src/app/services/riskscorelevel.service';

@Component({
  selector: 'app-update-riskscorelevel',
  templateUrl: './update-riskscorelevel.component.html',
  styleUrls: ['./update-riskscorelevel.component.css']
})
export class UpdateRiskscorelevelComponent implements OnInit {

  score:string;
  riskScoreLevel:RiskScoreLevel = new RiskScoreLevel();

  constructor(private service:RiskscorelevelService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.score = this.route.snapshot.params['score'];
    this.service.getRiskScoreLevelByScore(this.score).subscribe(data=>{
      this.riskScoreLevel=data;
    },error=>console.log(error));
  }

  onSubmit(){
    this.service.updateRiskScoreLevel(this.score,this.riskScoreLevel).subscribe(data=>{
      this.router.navigate(['/view']);
    },error=>console.log(error));
    
  }


}
