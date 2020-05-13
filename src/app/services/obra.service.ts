import { Injectable, Injector } from '@angular/core';
import { Obra } from '../models/Obra';
import { BaseService } from './base.service';

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

  constructor(protected injector: Injector) {
    super(injector);
  }
}
