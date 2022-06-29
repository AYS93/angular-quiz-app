import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KuhinjaComponent } from './kvizovi/kuhinja/kuhinja.component';
import { ZivotinjeComponent } from './kvizovi/zivotinje/zivotinje.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "", redirectTo: "welcome", pathMatch: "full"},
  {path: "welcome", component: WelcomeComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "quiz/vocabulary/zivotinje", component: ZivotinjeComponent},
  {path: "quiz/vocabulary/kuhinja", component: KuhinjaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
