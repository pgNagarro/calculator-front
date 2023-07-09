import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RiskDimension } from 'src/app/models/riskDimension';
import { RiskdimensionService } from 'src/app/services/riskdimension.service';

@Component({
  selector: 'app-add-riskdimension',
  templateUrl: './add-riskdimension.component.html',
  styleUrls: ['./add-riskdimension.component.css']
})
export class AddRiskdimensionComponent implements OnInit {

  riskDimension : RiskDimension = new RiskDimension();
  constructor(private service:RiskdimensionService,private router:Router) { }

  ngOnInit(): void {
  }

  saveRiskDimension(){
    this.service.addRiskDimension(this.riskDimension).subscribe((data)=>{
      console.log(data);
      this.goToView();
    },error=>console.error(error));    
  }

  goToView(){
      this.router.navigate(['/view']);
  }

  onSubmit(){
    console.log(this.riskDimension);
    this.saveRiskDimension();
  }

}
