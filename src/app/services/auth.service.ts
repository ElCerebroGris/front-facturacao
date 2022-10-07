import { Utilizador } from '../models/utilizador';
import { GeneralConstants } from './../constants/GeneralConstants';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, empty, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://yellen-api.herokuapp.com//v1/';

  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});


  private isUserLoged = new BehaviorSubject<boolean>(false);
  showMenu = new EventEmitter<boolean>();
  showMenuLateral = new EventEmitter<boolean>();
  flag = false;

  constructor(private http: HttpClient, private router: Router) {}

  postter(url: string, data: any): Observable<any> {
    return this.http.post(this.baseUrl + url, data, {
      headers: this.headers,
    });
  }

  verifyUserLoged() {
    return localStorage.getItem(GeneralConstants.USER_AUTH.USERID_KEY);
  }

  verifyUserAdmin() {
    return localStorage.getItem(GeneralConstants.USER_AUTH.TIPOUSER_KEY) == '1';
  }

  setToken(usuario: Utilizador) {
    localStorage.setItem(GeneralConstants.USER_AUTH.TOKEN_KEY, usuario.token);
    this.isUserLoged.next(true);
    this.showMenu.emit(true);
    this.showMenuLateral.emit(this.flag);
  }

  setPRDToken(token: string) {
    localStorage.setItem(GeneralConstants.USER_AUTH.PRD_FRAMETOKEN_KEY, token);
  }

  setLogin(usuario: Utilizador) {
    localStorage.setItem(GeneralConstants.USER_AUTH.USERID_KEY, usuario.id);
    localStorage.setItem(GeneralConstants.USER_AUTH.TOKEN_KEY, usuario.token);
    localStorage.setItem(
      GeneralConstants.USER_AUTH.USEREMAIL_KEY,
      usuario.email
    );
    localStorage.setItem(
      GeneralConstants.USER_AUTH.USERNAME_KEY,
      usuario.store_name
    );
    localStorage.setItem(
      GeneralConstants.USER_AUTH.FRAMETOKEN_KEY,
      usuario.frame_token
    );
    localStorage.setItem(
      GeneralConstants.USER_AUTH.PRD_FRAMETOKEN_KEY,
      usuario.prd_frame_token
    );
    localStorage.setItem(
      GeneralConstants.USER_AUTH.TIPOUSER_KEY,
      usuario.tipo_user + ''
    );
    localStorage.setItem(
      GeneralConstants.USER_AUTH.EMAIL_CONFIRMED_KEY,
      usuario.email_confirmed + ''
    );
    this.isUserLoged.next(true);
    this.showMenu.emit(true);
    if (usuario.tipo_user == 1) this.showMenuLateral.emit(true);
    window.location.reload();
    this.router.navigate(['/geral']);
  }

  logout() {
    localStorage.removeItem(GeneralConstants.USER_AUTH.TOKEN_KEY);
    localStorage.removeItem(GeneralConstants.USER_AUTH.USERID_KEY);
    localStorage.removeItem(GeneralConstants.USER_AUTH.USERNAME_KEY);
    localStorage.removeItem(GeneralConstants.USER_AUTH.USEREMAIL_KEY);
    localStorage.removeItem(GeneralConstants.USER_AUTH.TIPOUSER_KEY);
    this.isUserLoged.next(false);
    this.showMenu.emit(false);
    this.showMenuLateral.emit(false);
    this.router.navigate(['/login']);
  }

  logout2() {
    localStorage.removeItem(GeneralConstants.USER_AUTH.TOKEN_KEY);
    localStorage.removeItem(GeneralConstants.USER_AUTH.USERID_KEY);
    localStorage.removeItem(GeneralConstants.USER_AUTH.USERNAME_KEY);
    localStorage.removeItem(GeneralConstants.USER_AUTH.USEREMAIL_KEY);
    localStorage.removeItem(GeneralConstants.USER_AUTH.TIPOUSER_KEY);
    this.isUserLoged.next(false);
    this.showMenu.emit(false);
    this.showMenuLateral.emit(false);
  }

  getUserName() {
    return localStorage.getItem(GeneralConstants.USER_AUTH.USERNAME_KEY);
  }

  getFrameToken() {
    return localStorage.getItem(GeneralConstants.USER_AUTH.FRAMETOKEN_KEY);
  }
  getPRDFrameToken() {
    return localStorage.getItem(GeneralConstants.USER_AUTH.PRD_FRAMETOKEN_KEY);
  }

  getUserId() {
    return localStorage.getItem(GeneralConstants.USER_AUTH.USERID_KEY);
  }

  getToken() {
    return localStorage.getItem(GeneralConstants.USER_AUTH.TOKEN_KEY);
  }
  //MoibOW6dNTtHSczjGkF0dQtt

  getTipoUser() {
    return localStorage.getItem(GeneralConstants.USER_AUTH.TIPOUSER_KEY);
  }

  getEmailConfirmed() {
    return localStorage.getItem(GeneralConstants.USER_AUTH.EMAIL_CONFIRMED_KEY);
  }
}
