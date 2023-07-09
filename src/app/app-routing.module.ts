import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRiskcalcComponent } from './components/add-riskcalc/add-riskcalc.component';
import { AddRiskdimensionComponent } from './components/add-riskdimension/add-riskdimension.component';
import { AddRiskscoreComponent } from './components/add-riskscore/add-riskscore.component';
import { AddRiskscorelevelComponent } from './components/add-riskscorelevel/add-riskscorelevel.component';
import { AddScorecapComponent } from './components/add-scorecap/add-scorecap.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateCompanyRiskScoreComponent } from './components/update-company-risk-score/update-company-risk-score.component';
import { UpdateRiskcalcComponent } from './components/update-riskcalc/update-riskcalc.component';
import { UpdateRiskdimensionComponent } from './components/update-riskdimension/update-riskdimension.component';
import { UpdateRiskscorelevelComponent } from './components/update-riskscorelevel/update-riskscorelevel.component';
import { UpdateScorecapComponent } from './components/update-scorecap/update-scorecap.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'view',component:ViewComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'add-risk-score',component:AddRiskscoreComponent},
  {path:'add-risk-dimension',component:AddRiskdimensionComponent},
  {path:'add-scorecap',component:AddScorecapComponent},
  {path:'add-risk-calc-logic',component:AddRiskcalcComponent},
  {path:'add-risk-score-level',component:AddRiskscorelevelComponent},
  {path:'update-risk-score/:companyName',component:UpdateCompanyRiskScoreComponent},
  {path:'update-risk-dimension/:dimension',component:UpdateRiskdimensionComponent},
  {path:'update-risk-calc-logic/:elementName',component:UpdateRiskcalcComponent},
  {path:'update-risk-score-level/:score',component:UpdateRiskscorelevelComponent},
  {path:'update-scorecap/:condition',component:UpdateScorecapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
