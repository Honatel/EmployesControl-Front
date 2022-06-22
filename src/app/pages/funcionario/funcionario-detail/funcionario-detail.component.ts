import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/shared/models/funcionario';
import { FuncionarioService } from '../shared/funcionario.service';

@Component({
  selector: 'emp-funcionario-detail',
  templateUrl: './funcionario-detail.component.html',
  styleUrls: ['./funcionario-detail.component.scss']
})
export class FuncionarioDetailComponent implements OnInit {
  funcionario: Funcionario = new Funcionario();
  Lideres: Funcionario[] = [];
  mySelect = [];
  lastSelected: any;
  selectedIdLider: any;

  constructor(
    private funcService: FuncionarioService,
    private route: ActivatedRoute

  ) { }

  async ngOnInit() {
    var id;
    this.route.params.subscribe(params => {
      id = params['id']
    });
    this.funcionario = await this.funcService.getById(id);
    this.selectedIdLider = this.funcionario.liderId;
    this.Lideres = await this.funcService.GetLideres();
  }

  onSubmit() {
    this.funcionario.liderId = this.lastSelected ?? this.selectedIdLider;
    this.funcService.update(this.funcionario.id, this.funcionario);
  }

  selectChange() {
    this.lastSelected = this.funcService.getDropDownText(this.mySelect, this.Lideres)[0].id;
  }
}
