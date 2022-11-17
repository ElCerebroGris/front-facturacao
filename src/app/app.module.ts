import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaListComponent } from './components/factura/factura-list/factura-list.component';
import { FacturaAddComponent } from './components/factura/factura-add/factura-add.component';
import { ClientesListComponent } from './components/clientes/clientes-list/clientes-list.component';
import { ClientesAddComponent } from './components/clientes/clientes-add/clientes-add.component';
import { ItensListComponent } from './components/itens/itens-list/itens-list.component';
import { ItensAddComponent } from './components/itens/itens-add/itens-add.component';
import { FacturaVerComponent } from './components/factura/factura-ver/factura-ver.component';
import { ProformasListComponent } from './components/proformas/proformas-list/proformas-list.component';
import { ProformasAddComponent } from './components/proformas/proformas-add/proformas-add.component';
import { UserContaComponent } from './components/user/user-conta/user-conta.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { RelatoriosListComponent } from './components/relatorios/relatorios-list/relatorios-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './helpers/auth.guard';
import { GeneralService } from './services/general.service';
import { AuthService } from './services/auth.service';
import { JwtInterceptor } from './helpers/JwtInterceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContaComponent } from './components/user/conta/conta.component';
import { SaldoContaComponent } from './components/user/conta-tabs/saldo-conta/saldo-conta.component';
import { DadosFacturacaoComponent } from './components/user/conta-tabs/dados-facturacao/dados-facturacao.component';
import { MeuPerfilComponent } from './components/user/conta-tabs/meu-perfil/meu-perfil.component';
import { GerirUtilizadoresComponent } from './components/user/conta-tabs/gerir-utilizadores/gerir-utilizadores.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturaListComponent,
    FacturaAddComponent,
    ClientesListComponent,
    ClientesAddComponent,
    ItensListComponent,
    ItensAddComponent,
    FacturaVerComponent,
    ProformasListComponent,
    ProformasAddComponent,
    UserContaComponent,
    LoginComponent,
    RegisterComponent,
    RelatoriosListComponent,
    ContaComponent,
    SaldoContaComponent,
    DadosFacturacaoComponent,
    MeuPerfilComponent,
    GerirUtilizadoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(
      {
        timeOut: 5000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        closeButton: true,
      }
    ),
  ],
  providers: [AuthService, AuthGuard, GeneralService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
