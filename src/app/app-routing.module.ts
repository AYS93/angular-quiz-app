import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfUsersComponent } from './admin/list-of-users/list-of-users.component';
import { AdminGuard } from './guard/admin.guard';
import { AuthGuard } from './guard/auth.guard';
import { InfoPageComponent } from './info-page/info-page.component';
import { BrojeviIBrojneImeniceComponent } from './kvizovi/grammar/brojevi-i-brojne-imenice/brojevi-i-brojne-imenice.component';
import { GlagolJesamComponent } from './kvizovi/grammar/glagol-jesam/glagol-jesam.component';
import { VokalizacijaPoluglasnikaComponent } from './kvizovi/grammar/vokalizacija-poluglasnika/vokalizacija-poluglasnika.component';
import { VokativComponent } from './kvizovi/grammar/vokativ/vokativ.component';
import { InsektiComponent } from './kvizovi/insekti/insekti.component';
import { KuhinjaComponent } from './kvizovi/kuhinja/kuhinja.component';
import { PticeComponent } from './kvizovi/ptice/ptice.component';
import { RadniGlagolskiPridevComponent } from './kvizovi/radni-glagolski-pridev/radni-glagolski-pridev.component';
import { RefleksiSonantnogLComponent } from './kvizovi/refleksi-sonantnog-l/refleksi-sonantnog-l.component';
import { SinonimiMeseciUGodiniComponent } from './kvizovi/sinonimi-meseci-u-godini/sinonimi-meseci-u-godini.component';
import { AlbanizmiComponent } from './kvizovi/vocab/albanizmi/albanizmi.component';
import { SinonimiTurcizmiComponent } from './kvizovi/vocab/sinonimi-turcizmi/sinonimi-turcizmi.component';
import { ZivotinjeComponent } from './kvizovi/zivotinje/zivotinje.component';
import { RegistrationComponent } from './registration/registration.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ImaNaukaAImaIOdukaKvizComponent } from './tekstovi/ima-nauka-a-ima-i-oduka-kviz/ima-nauka-a-ima-i-oduka-kviz.component';
import { ImaNaukaAImaIOdukaComponent } from './tekstovi/ima-nauka-a-ima-i-oduka/ima-nauka-a-ima-i-oduka.component';
import { MlogoS6mSeMuchilaKvizComponent } from './tekstovi/mlogo-s6m-se-muchila-kviz/mlogo-s6m-se-muchila-kviz.component';
import { MlogoS6mSeMuchilaComponent } from './tekstovi/mlogo-s6m-se-muchila/mlogo-s6m-se-muchila.component';
import { OvojSiTekjePocheDaSeOsnuraKvizComponent } from './tekstovi/ovoj-si-tekje-poche-da-se-osnura-kviz/ovoj-si-tekje-poche-da-se-osnura-kviz.component';
import { OvojSiTekjePocheDaSeOsnuraComponent } from './tekstovi/ovoj-si-tekje-poche-da-se-osnura/ovoj-si-tekje-poche-da-se-osnura.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "", redirectTo: "welcome", pathMatch: "full"},
  {path: "welcome", component: WelcomeComponent},
  {path: "info-page", component: InfoPageComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "list-of-users", component: ListOfUsersComponent, canActivate: [AdminGuard]},
  {path: "scoreboard", component: ScoreboardComponent, canActivate: [AuthGuard]},
  {path: "quiz/vocabulary/insekti", component: InsektiComponent},
  {path: "quiz/vocabulary/zivotinje", component: ZivotinjeComponent, canActivate: [AuthGuard]},
  {path: "quiz/vocabulary/kuhinja", component: KuhinjaComponent, canActivate: [AuthGuard]},
  {path: "quiz/vocabulary/ptice", component: PticeComponent, canActivate: [AuthGuard]},
  {path: "quiz/vocabulary/sinonimi_meseci", component: SinonimiMeseciUGodiniComponent, canActivate: [AuthGuard]},
  {path: "quiz/vocabulary/sinonimi_turcizmi", component: SinonimiTurcizmiComponent, canActivate: [AuthGuard]},
  {path: "quiz/vocabulary/albanizmi", component: AlbanizmiComponent, canActivate: [AuthGuard]},
  {path: "quiz/grammar/radni-glagolski-pridev", component: RadniGlagolskiPridevComponent},
  {path: "quiz/grammar/refleksi-sonantnog-l", component: RefleksiSonantnogLComponent, canActivate: [AuthGuard]},
  {path: "quiz/grammar/brojevi-i-brojne-imenice", component: BrojeviIBrojneImeniceComponent, canActivate: [AuthGuard]},
  {path: "quiz/grammar/vokativ", component: VokativComponent, canActivate: [AuthGuard]},
  {path: "quiz/grammar/vokalizacija-poluglasnika", component: VokalizacijaPoluglasnikaComponent, canActivate: [AuthGuard]},
  {path: "quiz/grammar/glagol-jesam", component: GlagolJesamComponent, canActivate: [AuthGuard]},
  {path: "quiz/text/mlogo-s6m-se-muchila", component: MlogoS6mSeMuchilaComponent},
  {path: "quiz/text/mlogo-s6m-se-muchila-kviz", component: MlogoS6mSeMuchilaKvizComponent},
  {path: "quiz/text/ima-nauka-a-ima-i-oduka", component: ImaNaukaAImaIOdukaComponent, canActivate: [AuthGuard]},
  {path: "quiz/text/ima-nauka-a-ima-i-oduka-kviz", component: ImaNaukaAImaIOdukaKvizComponent, canActivate: [AuthGuard]},
  {path: "quiz/text/ovoj-si-tekje-poche-da-se-osnura", component: OvojSiTekjePocheDaSeOsnuraComponent, canActivate: [AuthGuard]},
  {path: "quiz/text/ovoj-si-tekje-poche-da-se-osnura-kviz", component: OvojSiTekjePocheDaSeOsnuraKvizComponent, canActivate: [AuthGuard]},
  {path: "**", component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
