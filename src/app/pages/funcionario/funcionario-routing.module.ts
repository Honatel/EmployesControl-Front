import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FuncionarioDetailComponent } from './funcionario-detail/funcionario-detail.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';

const routes: Routes = [
  { path: '', component: FuncionarioListComponent },
  { path: 'create', component: FormComponent },
  { path: 'edit/:id', component: FuncionarioDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
