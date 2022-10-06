import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itens-add',
  templateUrl: './itens-add.component.html',
  styleUrls: ['./itens-add.component.css']
})
export class ItensAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  salvar(){
    this.router.navigate(['itens'])
  }

}
