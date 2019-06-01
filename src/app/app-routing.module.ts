import { environment } from '../environments/environment';
import { BuyComponent } from './buy/buy.component';
import { HelpComponent } from './help/help.component';
import { SpeechComponent } from './speech/speech.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'speech', component: SpeechComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.useHashBasedRouting })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
