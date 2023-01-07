import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitolLogoComponent } from './titol-logo/titol-logo.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CistellaComponent } from './cistella/cistella.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistreANDLoginComponent } from './registre-andlogin/registre-andlogin.component';
import { CatalegComponent } from './cataleg/cataleg.component';
import { CondicionsComponent } from './condicions/condicions.component';

@NgModule({
  declarations: [
    AppComponent,
    TitolLogoComponent,
    MenuComponent,
    FooterComponent,
    CistellaComponent,
    RegistreANDLoginComponent,
    CistellaComponent,
    CatalegComponent,
    CondicionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
