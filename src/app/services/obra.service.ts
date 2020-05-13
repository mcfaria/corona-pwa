import { Injectable, Injector } from '@angular/core';
import { Obra } from '../models/Obra';
import { BaseService } from './base.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ObraService extends BaseService<Obra>  {

  getTabela(): string {
    return 'obra';
  }

  getUrl(): string {
    return 'http://localhost:9000/api/obras';
  }

  getRotaFuga(): string {
    return 'listar';
  }

  constructor(protected injector: Injector) {
    super(injector);
  }
}
