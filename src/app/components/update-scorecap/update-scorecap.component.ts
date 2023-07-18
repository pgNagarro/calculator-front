import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreCap } from 'src/app/models/scoreCap';
import { AddscorecapService } from 'src/app/services/addscorecap.service';

@Component({
  selector: 'app-update-scorecap',
  templateUrl: './update-scorecap.component.html',
  styleUrls: ['./update-scorecap.component.css']
})
export class UpdateScorecapComponent implements OnInit {

  condition:string;
  scoreCap: ScoreCap = new ScoreCap();

  constructor(private service:AddscorecapService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.condition = this.route.snapshot.params['condition'];
    this.service.getScoreCapByCondition(this.condition).subscribe(data=>{
      this.scoreCap=data;
    });
  }

  onSubmit(){
    this.service.updateScoreCap(this.condition,this.scoreCap).subscribe(data=>{
      this.router.navigate(['/view']);
    },error=>console.log(error));
    
  }


}