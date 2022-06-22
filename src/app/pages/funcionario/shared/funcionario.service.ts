import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Funcionario } from 'src/app/shared/models/funcionario';
import * as _ from 'lodash';
import { AuthService } from 'src/app/core/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private resource: string;

  private getHeaders() {
    return {
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${this.authService.getTokenStorage()}` }
    }
  }

  constructor(protected http: HttpClient, protected authService: AuthService) {
    this.resource = `${environment.API_URL}/v1/Funcionario`;
  }

  getDropDownText(id: any, object: any) {
    const selObj = _.filter(object, function (o) {
      return (_.includes(id, o.id));
    });
    return selObj;
  }

  public async GetLideres(): Promise<any[]> {
    const result = await lastValueFrom(
      this.http.get<Funcionario[]>(this.resource, this.getHeaders())
    ).then().catch();

    return result.filter((value) => value.isLider);
  }

  public async getAll(): Promise<any[]> {
    return lastValueFrom(
      this.http.get<Funcionario[]>(this.resource, this.getHeaders())
    ).then().catch();
  }

  public async getById(id?: number): Promise<Funcionario> {
    return lastValueFrom(
      this.http.get<Funcionario>(`${this.resource}/${id}`, this.getHeaders())
    ).then().catch();
  }

  public async post(funcionario: Funcionario): Promise<Funcionario[]> {
    return lastValueFrom(
      this.http.post<Funcionario[]>(this.resource, JSON.stringify(funcionario), this.getHeaders())
    ).then().catch();
  }

  public async update(id?: number, user?: Funcionario): Promise<Funcionario[]> {
    return lastValueFrom(
      this.http.put<Funcionario[]>(`${this.resource}/${id}`, user, this.getHeaders())
    ).then().catch();
  }

  public async delete(id?: number): Promise<Funcionario[]> {
    return lastValueFrom(
      this.http.delete<Funcionario[]>(`${this.resource}/${id}`, this.getHeaders())
    ).then().catch();
  }
}
