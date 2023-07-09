import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResultService } from './services/result.service';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './components/view/view.component';
import { AddScorecapComponent } from './components/add-scorecap/add-scorecap.component';
import { AddRiskcalcComponent } from './components/add-riskcalc/add-riskcalc.component';
import { AddRiskscorelevelComponent } from './components/add-riskscorelevel/add-riskscorelevel.component';
import { AddRiskdimensionComponent } from './components/add-riskdimension/add-riskdimension.component';
import { UpdateRiskdimensionComponent } from './components/update-riskdimension/update-riskdimension.component';
import { UpdateRiskcalcComponent } from './components/update-riskcalc/update-riskcalc.component';
import { UpdateRiskscorelevelComponent } from './components/update-riskscorelevel/update-riskscorelevel.component';
import { UpdateScorecapComponent } from './components/update-scorecap/update-scorecap.component';
import { AddRiskscoreComponent } from './components/add-riskscore/add-riskscore.component';
import { UpdateCompanyRiskScoreComponent } from './components/update-company-risk-score/update-company-risk-score.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    AddScorecapComponent,
    AddRiskcalcComponent,
    AddRiskscorelevelComponent,
    AddRiskdimensionComponent,
    UpdateRiskdimensionComponent,
    UpdateRiskcalcComponent,
    UpdateRiskscorelevelComponent,
    UpdateScorecapComponent,
    AddRiskscoreComponent,
    UpdateCompanyRiskScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
