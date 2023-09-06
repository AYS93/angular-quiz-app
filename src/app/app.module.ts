import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { RegistrationComponent } from './registration/registration.component';
import { ZivotinjeComponent } from './kvizovi/zivotinje/zivotinje.component';
import { InsektiComponent } from './kvizovi/insekti/insekti.component';
import { VokativComponent } from './kvizovi/grammar/vokativ/vokativ.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { GlagolJesamComponent } from './kvizovi/grammar/glagol-jesam/glagol-jesam.component';
import { TokenInterceptor } from './services/token-interceptor';
import { AuthGuard } from './guard/auth.guard';
import { ListOfUsersComponent } from './admin/list-of-users/list-of-users.component';
import { AdminGuard } from './guard/admin.guard';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ImaNaukaAImaIOdukaComponent } from './tekstovi/ima-nauka-a-ima-i-oduka/ima-nauka-a-ima-i-oduka.component';
import { ImaNaukaAImaIOdukaKvizComponent } from './tekstovi/ima-nauka-a-ima-i-oduka-kviz/ima-nauka-a-ima-i-oduka-kviz.component';
import { DaniUNedeljiComponent } from './kvizovi/vocab/dani-u-nedelji/dani-u-nedelji.component';
import { MindYourLanguageComponent } from './mind-your-language/mind-your-language.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    ChangeBgDirective,
    RegistrationComponent,
    ZivotinjeComponent,
    InsektiComponent,
    VokativComponent,
    InfoPageComponent,
    GlagolJesamComponent,
    ListOfUsersComponent,
    ScoreboardComponent,
    ImaNaukaAImaIOdukaComponent,
    ImaNaukaAImaIOdukaKvizComponent,
    DaniUNedeljiComponent,
    MindYourLanguageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    //MatSliderModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
