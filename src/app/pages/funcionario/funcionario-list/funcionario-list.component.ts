import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/shared/models/funcionario';
import { FuncionarioService } from '../shared/funcionario.service';

@Component({
  selector: 'emp-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  constructor(private funcService: FuncionarioService) { }

  async ngOnInit() {
    this.funcionarios = await this.funcService.getAll();
  }

  removeFuncionario(id?: number) {
    this.funcService.delete(id);
  }
}
