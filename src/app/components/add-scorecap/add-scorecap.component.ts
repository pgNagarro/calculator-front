import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreCap } from 'src/app/models/scoreCap';
import { AddscorecapService } from 'src/app/services/addscorecap.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-scorecap',
  templateUrl: './add-scorecap.component.html',
  styleUrls: ['./add-scorecap.component.css']
})
export class AddScorecapComponent implements OnInit {

  scoreCapForm: FormGroup;
  
  constructor(private service:AddscorecapService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.scoreCapForm = this.formBuilder.group({
      condition: ['', Validators.required],
      totalRiskCappedScore: ['', Validators.required]
    });
  }
  
  get condition(){
    return this.scoreCapForm.get('condition');
  }

  get totalRiskCappedSore(){
    return this.scoreCapForm.get('totalRiskCappedScore');
  }

  saveScoreCap() {
    if (this.scoreCapForm.valid) {
      const scoreCapData = this.scoreCapForm.value;
      this.service.addScoreCap(scoreCapData).subscribe(
        (data) => {
          console.log(data);
          this.goToView();
        },
        (error) => console.error(error)
      );
    }
  }
  

  goToView(){
      this.router.navigate(['/view']);
  }

  onSubmit(){

    this.saveScoreCap();
  }
}
