import { AuxRouteComponent } from './components/aux-route.component';
import { TemplateVariableAsComponent } from './components/template-variable-as-component.component';
import { DashboardComponent } from './components/dashboard.component';
import { ServiceOndestroyComponent } from './components/service-ondestroy.component';
import { PreventPartialPageDisplayComponent } from './components/prevent-partial-page-display.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component';
import { ExtendThirdPartyComponent } from './components/extend-third-party.component';
import { ParentComponent } from './components/child-to-parent-access.component';

export const routes: Routes = [
  { path: 'aux-route', component: AuxRouteComponent },
  { path: 'extend-third-party', component: ExtendThirdPartyComponent },
  { path: 'child-to-parent-access', component: ParentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'prevent-partial-page-display', component: PreventPartialPageDisplayComponent },
  { path: 'template-variable-as-component', component: TemplateVariableAsComponent },
  { path: 'service-ondestroy', component: ServiceOndestroyComponent },
  { path: 'login', component: LoginComponent, outlet: 'modal' },
  { path: '**', redirectTo: 'dashboard' },
];
