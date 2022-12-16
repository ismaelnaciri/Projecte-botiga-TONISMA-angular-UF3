import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { CistellaComponent } from './cistella/cistella.component'


const routes: Routes = [
  {path: 'cistella', component: CistellaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
