import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FormComponent } from './form/form.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioDetailComponent } from './funcionario-detail/funcionario-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    FuncionarioListComponent,
    FuncionarioDetailComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
