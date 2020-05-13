import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ObraService } from 'src/app/services/obra.service';
import { Obra } from 'src/app/models/Obra';

@Component({
  selector: 'app-listar-obra',
  templateUrl: './listar-obra.component.html',
  styleUrls: ['./listar-obra.component.css']
})
export class ListarObraComponent implements OnInit {
  public obras$: Observable<Obra[]>;

  constructor(private obraService: ObraService) { }

  ngOnInit(): void {
    this.obras$ = this.obraService.listar();
  }
}
