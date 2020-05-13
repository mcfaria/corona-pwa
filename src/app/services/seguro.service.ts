import { Injectable, Injector } from '@angular/core';
import { Seguro } from '../models/Seguro';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SeguroService extends BaseService<Seguro>  {

  getTabela(): string {
    return 'seguro';
  }

  getUrl(): string {
    return 'http://localhost:9000/api/seguros';
  }

  getRotaFuga(): string {
    return 'listar';
  }

  constructor(protected injector: Injector) {
    super(injector);
  }
}
