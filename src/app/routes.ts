import { AuxRouteComponent } from './components/aux-route/aux-route.component';
import { TemplateAsVariableComponent } from './components/template-as-variable/template-as-variable.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ServiceOndestroyComponent } from './components/service-ondestroy/service-ondestroy.component';
import { PreventPartialPageDisplayComponent } from './components/prevent-partial-page-display/prevent-partial-page-display.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'aux-route', component: AuxRouteComponent },
  { path: 'child-to-parent-access', component: AuxRouteComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'prevent-partial-page-display', component: PreventPartialPageDisplayComponent },
  { path: 'template-as-variable', component: TemplateAsVariableComponent },
  { path: 'service-ondestroy', component: ServiceOndestroyComponent },
  { path: '**', redirectTo: 'dashboard' },
];
