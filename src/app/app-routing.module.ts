import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroSeguroComponent } from './components/cadastro-seguro/cadastro-seguro.component';
import { ListarSegurosComponent } from './components/listar-seguros/listar-seguros.component';
import { CadastrarObraComponent } from './components/cadastrar-obra/cadastrar-obra.component';
import { ListarObraComponent } from './components/listar-obra/listar-obra.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cadastro' },
  { path: 'cadastro', component: CadastrarObraComponent },
  { path: 'listar', component: ListarObraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
