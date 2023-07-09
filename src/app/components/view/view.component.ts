import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AddscorecapService } from 'src/app/services/addscorecap.service';
import { CompanyRiskScoreService } from 'src/app/services/company-risk-score.service';
import { RiskcalcService } from 'src/app/services/riskcalc.service';
import { RiskdimensionService } from 'src/app/services/riskdimension.service';
import { RiskscorelevelService } from 'src/app/services/riskscorelevel.service';
import { ViewService } from 'src/app/services/view.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @ViewChild('tableRef', { static: true }) tableRef!: ElementRef<HTMLTableElement>;

  companyRiskScores:any;
  riskDimensions:any;
  riskCalcLogics:any;
  riskScoreLevels:any;
  scoreCaps:any;

  constructor(private service:ViewService,private router: Router, private rclService:RiskcalcService, 
    private rdService:RiskdimensionService,private rslService:RiskscorelevelService,private scService:AddscorecapService,private crsService:CompanyRiskScoreService) { }

  ngOnInit(): void {

    let crs = this.service.getCompanyRiskScore();
    crs.subscribe((data)=>{
      this.companyRiskScores=data;
      this.generateCompanyRiskScoreTable(this.companyRiskScores);
    });

    this.generateRiskDimensionTable();

    this.generateRiskCalcLogicTable();

    this.generateRiskScoreLevelTable();

    this.generateScoreCapTable();
  }

  generateRiskDimensionTable(){
    let rd = this.service.getRiskDimension();
    rd.subscribe((data)=>this.riskDimensions=data);
  }

  generateRiskCalcLogicTable(){
    let rc = this.service.getRiskCalcLogic();
    rc.subscribe((data)=>this.riskCalcLogics=data);
  }

  generateRiskScoreLevelTable(){
    let rsl = this.service.getRiskScoreLevel();
    rsl.subscribe((data)=>this.riskScoreLevels=data);
  }

  generateScoreCapTable(){
    let sc = this.service.getScoreCap();
    sc.subscribe((data)=>this.scoreCaps=data);
  }

  generateCompanyRiskScoreTable(_output:any){
    console.log(_output);
    const table = this.tableRef.nativeElement;

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const name = document.createElement('th');
      name.textContent = 'Company Name';
      headerRow.appendChild(name);

    for(const val of _output[0].dimensions){
      const header = document.createElement('th');
      header.textContent = val.dimensionName;
      headerRow.appendChild(header);
    }
    const actions = document.createElement('th');
    actions.textContent='Actions';
    headerRow.appendChild(actions);
    thead.appendChild(headerRow);

    const tbody = document.createElement('tbody');
    for (const val of _output) {
      const row = document.createElement('tr');
      const cname = document.createElement('td');
      cname.textContent = val.companyName;
      row.appendChild(cname);
      for(const ele of val.dimensions){
        const value = document.createElement('td');
        value.textContent = ele.dimensionValue;
        row.appendChild(value);
      }

      const updateButton = document.createElement('button');
      updateButton.textContent='Update';
      updateButton.setAttribute('class','btn btn-info');
      updateButton.setAttribute('style','background-color:#0ed9ff;');
      updateButton.addEventListener('click',()=>{
        this.router.navigate(['update-risk-score',val.companyName]);
      });
      const deleteButton = document.createElement('button');
      deleteButton.textContent='Delete';
      deleteButton.setAttribute('class','btn btn-danger');
      deleteButton.setAttribute('style','margin-left: 10px; background-color:#dc3545;color:white;');
      deleteButton.addEventListener('click',()=>{
          this.crsService.deleteRiskScore(val.companyName).subscribe(data=>{
              this.generateCompanyRiskScoreTable(_output);
              this.router.navigate(['/view']);
          });
      });
      row.appendChild(updateButton);
      row.appendChild(deleteButton);

      tbody.appendChild(row);
    }
    thead.setAttribute("class","table-dark");
    table.appendChild(thead);
    table.appendChild(tbody);
  }

  updateRiskCalc(elementName:string){
    this.router.navigate(['update-risk-calc-logic',elementName]);
  }

  deleteRiskCalc(elementName:string){

    this.rclService.deleteRiskCalc(elementName).subscribe(data=>{
      console.log(data);
      this.generateRiskCalcLogicTable();
      this.router.navigate(['/view']);
    });
     
  }


  updateRiskDimension(dimension:string){
    this.router.navigate(['update-risk-dimension',dimension]);
  }

  deleteRiskDimension(dimension:string){
    this.rdService.deleteRiskDimension(dimension).subscribe(data=>{
      this.generateRiskDimensionTable();
      this.router.navigate(['/view']);
    });
  }

  updateRiskScoreLevel(score:string){
    this.router.navigate(['update-risk-score-level',score]);
  }

  deleteRiskScoreLevel(score:string){
    this.rslService.deleteRiskScoreLevel(score).subscribe(data=>{
      this.generateRiskScoreLevelTable();
      this.router.navigate(['/view']);
    });
  }

  updateScoreCap(condition:string){
    this.router.navigate(['update-scorecap',condition]);
  }

  deleteScoreCap(condition:string){
    this.scService.deleteScoreCap(condition).subscribe(data=>{
      this.generateScoreCapTable();
      this.router.navigate(['/view']);
    });
  }



}
