import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RiskDimension } from 'src/app/models/riskDimension';
import { RiskdimensionService } from 'src/app/services/riskdimension.service';

@Component({
  selector: 'app-update-riskdimension',
  templateUrl: './update-riskdimension.component.html',
  styleUrls: ['./update-riskdimension.component.css']
})
export class UpdateRiskdimensionComponent implements OnInit {

  dimension:string;
  riskDimension: RiskDimension = new RiskDimension();
  constructor(private service:RiskdimensionService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.dimension = this.route.snapshot.params['dimension'];
    this.service.getRiskDimensionByDimension(this.dimension).subscribe(data=>{
      this.riskDimension=data;
    },error=>console.log(error));
  }

  onSubmit(){
    this.service.updateRiskDimension(this.dimension,this.riskDimension).subscribe(data=>{
      this.router.navigate(['/view']);
    },error=>console.log(error));
    
  }

}
