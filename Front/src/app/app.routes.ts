import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'charts', component: ChartsComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
