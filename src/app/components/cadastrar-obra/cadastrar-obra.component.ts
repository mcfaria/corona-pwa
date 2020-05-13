import { Component, OnInit } from '@angular/core';
import { MarcaCarroService } from 'src/app/services/marca-carro.service';
import { Obra } from 'src/app/models/Obra';
import { MarcaCarro } from 'src/app/models/MarcaCarro';
import { Observable } from 'rxjs';
import { ObraService } from 'src/app/services/obra.service';

@Component({
  selector: 'app-cadastrar-obra',
  templateUrl: './cadastrar-obra.component.html',
  styleUrls: ['./cadastrar-obra.component.css']
})
export class CadastrarObraComponent implements OnInit {

  public obra = new Obra();
  public lista$: Observable<MarcaCarro[]>;

  constructor(private marcaCarroService: MarcaCarroService, private obraService: ObraService) { }

  ngOnInit(): void {
    this.lista$ = this.marcaCarroService.getMarcas();
  }

  public salvar() {
    this.obraService.salvar(this.obra);
  }

  public enviarNotificacao() {

  }

}
