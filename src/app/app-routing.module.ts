import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfUsersComponent } from './admin/list-of-users/list-of-users.component';
import { AdminGuard } from './guard/admin.guard';
import { AuthGuard } from './guard/auth.guard';
import { InfoPageComponent } from './info-page/info-page.component';
import { GlagolJesamComponent } from './kvizovi/grammar/glagol-jesam/glagol-jesam.component';
import { VokativComponent } from './kvizovi/grammar/vokativ/vokativ.component';
import { InsektiComponent } from './kvizovi/insekti/insekti.component';
import { DaniUNedeljiComponent } from './kvizovi/vocab/dani-u-nedelji/dani-u-nedelji.component';
import { ZivotinjeComponent } from './kvizovi/zivotinje/zivotinje.component';
import { MindYourLanguageComponent } from './mind-your-language/mind-your-language.component';
import { RegistrationComponent } from './registration/registration.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ImaNaukaAImaIOdukaKvizComponent } from './tekstovi/ima-nauka-a-ima-i-oduka-kviz/ima-nauka-a-ima-i-oduka-kviz.component';
import { ImaNaukaAImaIOdukaComponent } from './tekstovi/ima-nauka-a-ima-i-oduka/ima-nauka-a-ima-i-oduka.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "", redirectTo: "welcome", pathMatch: "full"},
  {path: "welcome", component: WelcomeComponent},
  {path: "info-page", component: InfoPageComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "mind-your-language", component: MindYourLanguageComponent},
  {path: "list-of-users", component: ListOfUsersComponent, canActivate: [AdminGuard]},
  {path: "scoreboard", component: ScoreboardComponent, canActivate: [AuthGuard]},

  {path: "quiz/vocabulary/insekti", component: InsektiComponent},
  {path: "quiz/vocabulary/zivotinje", component: ZivotinjeComponent, canActivate: [AuthGuard]},
  {path: "quiz/vocabulary/dani-u-nedelji", component: DaniUNedeljiComponent, canActivate: [AuthGuard]},
  
  {path: "quiz/grammar/vokativ", component: VokativComponent, canActivate: [AuthGuard]},
  {path: "quiz/grammar/glagol-jesam", component: GlagolJesamComponent},
  
  {path: "quiz/text/ima-nauka-a-ima-i-oduka", component: ImaNaukaAImaIOdukaComponent},
  {path: "quiz/text/ima-nauka-a-ima-i-oduka-kviz", component: ImaNaukaAImaIOdukaKvizComponent, canActivate: [AuthGuard]},
  
  {path: "**", component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
