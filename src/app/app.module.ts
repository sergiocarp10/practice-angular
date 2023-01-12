import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// módulo para el manejo de rutas
import { RouterModule, Route } from "@angular/router";

// módulo firebase: general y autenticación
// firebase versión 9
import { firebaseConfig } from './firebase/FirebaseConfig';
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { LinesComponent } from './lines/lines.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { MonthSummaryComponent } from './month-summary/month-summary.component';
import { GamesComponent } from './games/games.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { UserService } from './user.service';

// my routes
const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'lines', component: LinesComponent},
  {path: 'month_summary', component: MonthSummaryComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'games', component: GamesComponent},
  {path: 'account/login', component: LoginComponent},
  {path: 'account/register', component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    LinesComponent,
    HomeComponent,
    HistoryComponent,
    MonthSummaryComponent,
    GamesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    // firebase 9
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
