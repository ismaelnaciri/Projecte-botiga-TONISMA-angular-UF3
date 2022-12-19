import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { CistellaComponent } from './cistella/cistella.component'
import { RegistreANDLoginComponent } from './registre-andlogin/registre-andlogin.component'


const routes: Routes = [
  {path: 'cistella', component: CistellaComponent},
  {path: 'signin', component: RegistreANDLoginComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
