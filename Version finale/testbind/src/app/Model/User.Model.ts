export class User {
  constructor(
    public id_user:number,
    public email: string,
    public full_name: string,
    public password: string,
    public telephone: number,
    public adresse : string,
    public codePostal : number,
    public disponible:boolean,
    public profession: string,
    public total_services:number,
  ) {}
}
