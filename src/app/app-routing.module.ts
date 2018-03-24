import { NgModule } from '@angular/core';
import{RouterModule,ROUTES} from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';


@NgModule({
  
  exports: [RouterModule],
  // imports:[RouterModule.forRoot(Routes)]
})
export class AppRoutingModule { }
