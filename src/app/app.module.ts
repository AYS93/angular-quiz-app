import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { RegistrationComponent } from './registration/registration.component';
import { KuhinjaComponent } from './kvizovi/kuhinja/kuhinja.component';
import { ZivotinjeComponent } from './kvizovi/zivotinje/zivotinje.component';
import { InsektiComponent } from './kvizovi/insekti/insekti.component';
import { PticeComponent } from './kvizovi/ptice/ptice.component';
import { RefleksiSonantnogLComponent } from './kvizovi/refleksi-sonantnog-l/refleksi-sonantnog-l.component';
import { SinonimiMeseciUGodiniComponent } from './kvizovi/sinonimi-meseci-u-godini/sinonimi-meseci-u-godini.component';
import { RadniGlagolskiPridevComponent } from './kvizovi/radni-glagolski-pridev/radni-glagolski-pridev.component';
import { MlogoS6mSeMuchilaComponent } from './tekstovi/mlogo-s6m-se-muchila/mlogo-s6m-se-muchila.component';
import { MlogoS6mSeMuchilaKvizComponent } from './tekstovi/mlogo-s6m-se-muchila-kviz/mlogo-s6m-se-muchila-kviz.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    ChangeBgDirective,
    RegistrationComponent,
    KuhinjaComponent,
    ZivotinjeComponent,
    InsektiComponent,
    PticeComponent,
    RefleksiSonantnogLComponent,
    SinonimiMeseciUGodiniComponent,
    RadniGlagolskiPridevComponent,
    MlogoS6mSeMuchilaComponent,
    MlogoS6mSeMuchilaKvizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
