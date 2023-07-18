import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RiskCalc } from 'src/app/models/riskCalc';
import { RiskcalcService } from 'src/app/services/riskcalc.service';

@Component({
  selector: 'app-update-riskcalc',
  templateUrl: './update-riskcalc.component.html',
  styleUrls: ['./update-riskcalc.component.css']
})
export class UpdateRiskcalcComponent implements OnInit {
  
  elementName:string;
  riskCalc: RiskCalc = new RiskCalc();
  constructor(private service:RiskcalcService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.elementName = this.route.snapshot.params['elementName'];
    this.service.getRiskCalcByElementName(this.elementName).subscribe(data=>{
      this.riskCalc=data;
    },error=>console.log(error));
  }

  onSubmit(){
    this.service.updateRiskCalc(this.elementName,this.riskCalc).subscribe(data=>{
      this.router.navigate(['/view']);
    },error=>console.log(error));
    
  }

}