import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// módulo para el manejo de rutas
import { RouterModule, Route } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { LinesComponent } from './lines/lines.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { MonthSummaryComponent } from './month-summary/month-summary.component';
import { GamesComponent } from './games/games.component';

// my routes
const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'lines', component: LinesComponent},
  {path: 'month_summary', component: MonthSummaryComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'games', component: GamesComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    LinesComponent,
    HomeComponent,
    HistoryComponent,
    MonthSummaryComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
