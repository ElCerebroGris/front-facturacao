import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-add',
  templateUrl: './clientes-add.component.html',
  styleUrls: ['./clientes-add.component.css']
})
export class ClientesAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  salvar(){
    this.router.navigate(['clientes'])
  }

}
