import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ChartsComponent } from './pages/charts/charts.component';
import {HomeComponent} from './pages/home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Now / renders the HomeComponent
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'charts', component: ChartsComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
