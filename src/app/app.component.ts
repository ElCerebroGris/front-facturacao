import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-facturacao';

  online = false;
  userName: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.showMenu.subscribe((mostrar) => (this.online = mostrar));
    if (this.auth.verifyUserLoged()) {
      this.online = true;

      this.userName = this.auth.getUserName() || '';
    }
  }

  sair() {
    this.auth.logout();
  }
}
