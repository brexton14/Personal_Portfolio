import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import {HomeComponent} from './pages/home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Now / renders the HomeComponent
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
