import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proformas-add',
  templateUrl: './proformas-add.component.html',
  styleUrls: ['./proformas-add.component.css']
})
export class ProformasAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  salvar(){
    this.router.navigate(['proformas'])
  }

}
