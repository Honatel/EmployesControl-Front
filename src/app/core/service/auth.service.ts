import { environment } from "src/environments/environment"
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from "rxjs";
import jwtDecode from "jwt-decode";
import { User } from "src/app/shared/models/user";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  constructor(protected http: HttpClient) { }

  private headerAuthentication = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  getTokenStorage(): string {
    return localStorage.getItem(this.JWT_TOKEN)!;
  }

  public async getToken(user: User): Promise<any> {

    debugger;
    var objTOken = {
      userName: user.userName,
      password: user.password,
    }

    var url = `${environment.API_URL}/token`;
    return lastValueFrom(
      this.http.post<any>(url, objTOken, this.headerAuthentication)
    ).then((resp) => {
      const jwtDecoded = jwtDecode(resp.token) as any;
      this.storageToken(resp.token);
      localStorage.setItem('TIME_EXPIRE', jwtDecoded.exp);
    }).catch();
  }

  private storageToken(token: string) {
    localStorage.setItem(this.JWT_TOKEN, token);
  }
}
