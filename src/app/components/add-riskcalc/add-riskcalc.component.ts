import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RiskCalc } from 'src/app/models/riskCalc';
import { RiskcalcService } from 'src/app/services/riskcalc.service';

@Component({
  selector: 'app-add-riskcalc',
  templateUrl: './add-riskcalc.component.html',
  styleUrls: ['./add-riskcalc.component.css']
})
export class AddRiskcalcComponent implements OnInit {

  riskCalc : RiskCalc = new RiskCalc();
  constructor(private service:RiskcalcService,private router:Router) { }

  ngOnInit(): void {}

  saveRiskCalc(){
    this.service.addRiskCalc(this.riskCalc).subscribe((data)=>{
      console.log(data);
      this.goToView();
    },error=>console.error(error));    
  }

  goToView(){
      this.router.navigate(['/view']);
  }

  onSubmit(){
    console.log(this.riskCalc);
    this.saveRiskCalc();
  }

}
