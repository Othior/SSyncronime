import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { HypnoseComponent } from './component/hypnose/hypnose.component';
import { ContactComponent } from './component/contact/contact.component';
import { AtelierComponent } from './component/atelier/atelier.component';
import { TarifComponent } from './component/tarif/tarif.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { DifferenteHypnoseComponent } from './component/differente-hypnose/differente-hypnose.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    HypnoseComponent,
    ContactComponent,
    AtelierComponent,
    TarifComponent,
    NotfoundComponent,
    DifferenteHypnoseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
