import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/shared/models/funcionario';
import { FuncionarioService } from '../shared/funcionario.service';

@Component({
  selector: 'emp-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  funcionarios: Funcionario = new Funcionario();
  Lideres: Funcionario[] = [];
  mySelect = [];
  lastSelected: any;

  constructor(
    private funcService: FuncionarioService,
  ) { }

  async ngOnInit() {
    this.Lideres = await this.funcService.GetLideres();
  }

  async onSubmit() {
    const checked = document.getElementsByName('IsliderFunc')[0] as HTMLInputElement | null;
    if (checked?.checked)
      this.funcionarios.lider = true;

    this.funcionarios.liderId = this.lastSelected;
    await this.funcService.post(this.funcionarios)
  }

  selectChange() {
    this.lastSelected = this.funcService.getDropDownText(this.mySelect, this.Lideres)[0].id;
  }
}
