import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuComponent } from './components/menu/menu.component';
import { CadastroSeguroComponent } from './components/cadastro-seguro/cadastro-seguro.component';
import { ListarSegurosComponent } from './components/listar-seguros/listar-seguros.component';
import { CadastrarObraComponent } from './components/cadastrar-obra/cadastrar-obra.component';
import { ListarObraComponent } from './components/listar-obra/listar-obra.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroSeguroComponent,
    ListarSegurosComponent,
    CadastrarObraComponent,
    ListarObraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
