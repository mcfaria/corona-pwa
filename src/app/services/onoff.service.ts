import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnoffService {

  private statusConexao$ = new Subject<boolean>();

  constructor() {
    window.addEventListener('online', () => this.atualizaStatusConexao());
    window.addEventListener('offline', () => this.atualizaStatusConexao());
  }

  get isOnline(): boolean {
    return !!window.navigator.onLine;
  }

  get statusConecao(): Observable<boolean> {
    return this.statusConexao$.asObservable();
  }

  atualizaStatusConexao() {
    this.statusConexao$.next(this.isOnline);
  }
}
