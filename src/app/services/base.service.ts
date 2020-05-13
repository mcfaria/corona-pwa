import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnoffService } from './onoff.service';
import { Observable } from 'rxjs';
import Dexie from 'dexie';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:no-shadowed-variable
export abstract class BaseService<T extends { id: string }> {
  private db: Dexie;
  private table: Dexie.Table<T, any> = null;

  protected http: HttpClient;
  protected onoff: OnoffService;
  private router: Router;

  private nomeTabela: string;
  private urlApi: string;
  private rotaFuga: string;
  abstract getTabela(): string;
  abstract getUrl(): string;
  abstract getRotaFuga(): string;

  constructor(protected injector: Injector) {
    this.http = this.injector.get(HttpClient);
    this.onoff = this.injector.get(OnoffService);
    this.router = this.injector.get(Router);

    this.nomeTabela = this.getTabela();
    this.urlApi = this.getUrl();
    this.rotaFuga = this.getRotaFuga();



    this.ouvirStatusConexao();
    this.iniciarBanco();
  }

  private iniciarBanco() {
    this.db = new Dexie('db-ag');
    this.db.version(1).stores({ [this.nomeTabela]: 'id' });
    this.table = this.db.table(this.nomeTabela);
  }

  private salvarApi(entidade: T) {
    this.http.post(this.urlApi, entidade)
      .subscribe(
        () => {
          alert('entidade foi cadastrado com sucesso');
          this.router.navigate([this.rotaFuga]);
        },
        (err) => console.log('Erro ao cadastrar entidade'));
  }

  private async salvarLocal(entidade: T) {
    try {
      const item = this.table.get(entidade.id);
      if (!item) {
        await this.table.add(entidade);
        const todos: T[] = await this.table.toArray();
      }
      else {
        await this.table.update(entidade.id, entidade);
        const todos: T[] = await this.table.toArray();
      }

      this.router.navigate([this.rotaFuga]);
    }
    catch (error) {
      console.log('erro ao gravar local', error);
    }
  }

  private async sincronizar() {
    const todos: T[] = await this.table.toArray();
    for (const entidade of todos) {
      this.salvarApi(entidade);
      await this.table.delete(entidade.id);
      console.log('entidade sincronizado com sucesso', entidade.id);
    }
  }

  public salvar(entidade: T) {
    if (this.onoff.isOnline) {
      this.salvarApi(entidade);
    }
    else {
      this.salvarLocal(entidade);
    }
  }

  listar(): Observable<T[]> {
    return this.http.get<T[]>(this.urlApi);
  }

  private ouvirStatusConexao() {
    this.onoff.statusConecao.subscribe(online => {
      if (online) {
        this.sincronizar();
      }
      else {
        console.log('estou off line');
      }
    });
  }
}
