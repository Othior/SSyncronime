import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './component/acceuil/acceuil.component';
import { AtelierComponent } from './component/atelier/atelier.component';
import { ContactComponent } from './component/contact/contact.component';
import { HypnoseComponent } from './component/hypnose/hypnose.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { TarifComponent } from './component/tarif/tarif.component';

const routes: Routes = [
  { path:'' , redirectTo:'acceuil' , pathMatch:'full'},
  { path:'acceuil' , component: AcceuilComponent },
  { path:'hypnose' , component: HypnoseComponent },
  { path:'contact' , component: ContactComponent },
  { path:'atelier' , component: AtelierComponent},
  { path:'tarif' , component: TarifComponent},
  { path:'**' , component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
