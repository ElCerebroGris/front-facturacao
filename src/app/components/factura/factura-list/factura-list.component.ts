import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  chamarVer(){
    this.router.navigate(['/factura-ver'])
  }

}
