import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Utilizador } from 'src/app/models/utilizador';
import { AuthService } from 'src/app/services/auth.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = new Utilizador();
  loginForm: FormGroup;
  loading = false;
  errorForm = false;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private auth: AuthService,
    private service: GeneralService,
    private _formBuilder: FormBuilder
  ) {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.auth.verifyUserLoged()) {
      this.router.navigate(['/']);
    }
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (!this.loginForm.valid) {
      return;
    }
    this.errorForm = false;
    this.loading = true;
    this.usuario.email = this.loginForm.value.email;
    this.usuario.password = this.loginForm.value.password;
    this.usuario.token = 'aaaaa';
    this.usuario.id = 'aaa'
    this.auth.setLogin(this.usuario);
/*
    this.auth.postter('sessions', this.usuario).subscribe(
      (res) => {
        this.usuario.id = res.id;
        this.usuario.token = res.token;
        this.usuario.frame_token = res.frame_token;
        this.usuario.prd_frame_token = res.prd_frame_token;
        this.usuario.email = res.email;
        this.usuario.store_name = res.store_name;
        this.usuario.email_confirmed = res.email_confirmed;
        this.loading = false;
        this.toastr.success('Autenticado com sucesso', 'Autenticação');
        this.auth.setLogin(this.usuario);
      },
      (error) => {
        this.toastr.error('Erro de autenticação', 'Autenticação');
        this.loading = false;
        this.errorForm = true;
      }
    );
    */
  }
}
