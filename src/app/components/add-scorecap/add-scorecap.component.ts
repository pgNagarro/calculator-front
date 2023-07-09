import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ScoreCap } from 'src/app/models/scoreCap';
import { AddscorecapService } from 'src/app/services/addscorecap.service';

@Component({
  selector: 'app-add-scorecap',
  templateUrl: './add-scorecap.component.html',
  styleUrls: ['./add-scorecap.component.css']
})
export class AddScorecapComponent implements OnInit {

  scoreCap : ScoreCap = new ScoreCap();
  constructor(private service:AddscorecapService,private router:Router) { }

  ngOnInit(): void {
  }

  saveScoreCap(){
    this.service.addScoreCap(this.scoreCap).subscribe((data)=>{
      console.log(data);
      this.goToView();
    },error=>console.error(error));    
  }

  goToView(){
      this.router.navigate(['/view']);
  }

  onSubmit(){
    console.log(this.scoreCap);
    this.saveScoreCap();
  }
}
