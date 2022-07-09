import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsektiComponent } from './kvizovi/insekti/insekti.component';
import { KuhinjaComponent } from './kvizovi/kuhinja/kuhinja.component';
import { PticeComponent } from './kvizovi/ptice/ptice.component';
import { RefleksiSonantnogLComponent } from './kvizovi/refleksi-sonantnog-l/refleksi-sonantnog-l.component';
import { SinonimiMeseciUGodiniComponent } from './kvizovi/sinonimi-meseci-u-godini/sinonimi-meseci-u-godini.component';
import { ZivotinjeComponent } from './kvizovi/zivotinje/zivotinje.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "", redirectTo: "welcome", pathMatch: "full"},
  {path: "welcome", component: WelcomeComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "quiz/vocabulary/zivotinje", component: ZivotinjeComponent},
  {path: "quiz/vocabulary/kuhinja", component: KuhinjaComponent},
  {path: "quiz/vocabulary/insekti", component: InsektiComponent},
  {path: "quiz/vocabulary/ptice", component: PticeComponent},
  {path: "quiz/vocabulary/sinonimi_meseci", component: SinonimiMeseciUGodiniComponent},
  {path: "quiz/grammar/refleksi-sonantnog-l", component: RefleksiSonantnogLComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
