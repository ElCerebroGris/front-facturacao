import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factura-add',
  templateUrl: './factura-add.component.html',
  styleUrls: ['./factura-add.component.css']
})
export class FacturaAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  salvar(){
    this.router.navigate(['facturas'])
  }

}
