
export class Funcionario {
  constructor(
    public id?: number,
    public nome?: string,
    public sobrenome?: string,
    public email?: string,
    public numeroChapa?: number,
    public nomelider?: string,
    public liderId?: number,
    public telefones?: string[],
    public ddd?: string[],
    public isLider?: boolean,
    public password?: string,
  ) { };
}
