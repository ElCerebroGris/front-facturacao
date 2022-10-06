import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesAddComponent } from './components/clientes/clientes-add/clientes-add.component';
import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';
import { FacturaAddComponent } from './components/factura/factura-add/factura-add.component';
import { FacturaListComponent } from './components/factura/factura-list/factura-list.component';
import { FacturaVerComponent } from './components/factura/factura-ver/factura-ver.component';
import { GeralComponent } from './components/geral/geral.component';
import { ItensAddComponent } from './components/itens/itens-add/itens-add.component';
import { ItensListComponent } from './components/itens/itens-list/itens-list.component';
import { ProformasAddComponent } from './components/proformas/proformas-add/proformas-add.component';
import { ProformasListComponent } from './components/proformas/proformas-list/proformas-list.component';
import { RelatoriosListComponent } from './components/relatorios/relatorios-list/relatorios-list.component';
import { LoginComponent } from './components/user/login/login.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/geral', pathMatch: 'full'},
  {path: 'geral', component: GeralComponent,
  canActivate: [AuthGuard]},
  {path: 'facturas', component: FacturaListComponent,
  canActivate: [AuthGuard]},
  {path: 'facturas-add', component: FacturaAddComponent,
  canActivate: [AuthGuard]},
  {path: 'facturas-ver', component: FacturaVerComponent,
  canActivate: [AuthGuard]},
  {path: 'proformas', component: ProformasListComponent,
  canActivate: [AuthGuard]},
  {path: 'proformas-add', component: ProformasAddComponent,
  canActivate: [AuthGuard]},
  {path: 'clientes', component: ClientesListComponent,
  canActivate: [AuthGuard]},
  {path: 'clientes-add', component: ClientesAddComponent,
  canActivate: [AuthGuard]},
  {path: 'itens', component: ItensListComponent,
  canActivate: [AuthGuard]},
  {path: 'itens-add', component: ItensAddComponent,
  canActivate: [AuthGuard]},
  {path: 'relatorios', component: RelatoriosListComponent,
  canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
