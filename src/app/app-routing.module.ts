import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ZivotinjeComponent } from './kvizovi/zivotinje/zivotinje.component';
import { RegistrationComponent } from './registration/registration.component';
import { MlogoS6mSeMuchilaKvizComponent } from './tekstovi/mlogo-s6m-se-muchila-kviz/mlogo-s6m-se-muchila-kviz.component';
import { MlogoS6mSeMuchilaComponent } from './tekstovi/mlogo-s6m-se-muchila/mlogo-s6m-se-muchila.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "", redirectTo: "welcome", pathMatch: "full"},
  {path: "welcome", component: WelcomeComponent},
  {path: "info-page", component: InfoPageComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "quiz/vocabulary/zivotinje", component: ZivotinjeComponent},
  {path: "quiz/vocabulary/kuhinja", component: KuhinjaComponent},
  {path: "quiz/vocabulary/insekti", component: InsektiComponent},
  {path: "quiz/vocabulary/ptice", component: PticeComponent},
  {path: "quiz/vocabulary/sinonimi_meseci", component: SinonimiMeseciUGodiniComponent},
  {path: "quiz/grammar/radni-glagolski-pridev", component: RadniGlagolskiPridevComponent},
  {path: "quiz/grammar/refleksi-sonantnog-l", component: RefleksiSonantnogLComponent},
  {path: "quiz/grammar/brojevi-i-brojne-imenice", component: BrojeviIBrojneImeniceComponent},
  {path: "quiz/grammar/vokativ", component: VokativComponent},
  {path: "quiz/grammar/vokalizacija-poluglasnika", component: VokalizacijaPoluglasnikaComponent},
  {path: "quiz/grammar/glagol-jesam", component: GlagolJesamComponent},
  {path: "quiz/text/mlogo-s6m-se-muchila", component: MlogoS6mSeMuchilaComponent},
  {path: "quiz/text/mlogo-s6m-se-muchila-kviz", component: MlogoS6mSeMuchilaKvizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
