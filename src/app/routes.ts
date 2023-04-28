import { AuxRouteComponent } from './components/aux-route.component';
import { TemplateVariableAsComponent } from './components/template-variable-as-component.component';
import { DashboardComponent } from './components/dashboard.component';
import { ServiceOndestroyComponent } from './components/service-ondestroy.component';
import { PreventPartialPageDisplayComponent } from './components/prevent-partial-page-display.component';
import { Routes } from '@angular/router';
import { FooterComponent } from './core/footer.component';
import { LoginComponent } from './components/login.component';

export const routes: Routes = [
  { path: 'aux-route', component: AuxRouteComponent },
  { path: 'child-to-parent-access', component: AuxRouteComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'prevent-partial-page-display', component: PreventPartialPageDisplayComponent },
  { path: 'template-variable-as-component', component: TemplateVariableAsComponent },
  { path: 'service-ondestroy', component: ServiceOndestroyComponent },
  { path: 'login', component: LoginComponent, outlet: 'modal' },
  { path: '**', redirectTo: 'dashboard' },
];
