import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { QuizComponent } from './page/quiz/quiz.component';
import { NavComponent } from './common/nav/nav.component';
import { ChartComponent } from './common/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    NavComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
