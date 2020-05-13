import { Component, OnInit } from '@angular/core';
import { MarcaCarroService } from 'src/app/services/marca-carro.service';
import { Seguro } from 'src/app/models/Seguro';
import { MarcaCarro } from 'src/app/models/MarcaCarro';
import { Observable } from 'rxjs';
import { SeguroService } from 'src/app/services/seguro.service';


@Component({
  selector: 'app-cadastro-seguro',
  templateUrl: './cadastro-seguro.component.html',
  styleUrls: ['./cadastro-seguro.component.css']
})
export class CadastroSeguroComponent implements OnInit {

  public seguro = new Seguro();
  public marcasCarros$: Observable<MarcaCarro[]>;

  constructor(private marcaCarroService: MarcaCarroService, private seguroService: SeguroService) { }

  ngOnInit(): void {
    this.marcasCarros$ = this.marcaCarroService.getMarcas();
  }

  public salvar() {
    // console.log('chamou o adicionar', this.seguro);
    this.seguro.id = this.seguro.placaCarro;
    this.seguroService.salvar(this.seguro);
  }

  public enviarNotificacao() {

  }

  // no video ele falou desse, mas nao usou ate entao
  // cadastar() {
  //   this.seguroService.cadastrar(this.seguro);
  // }

}
