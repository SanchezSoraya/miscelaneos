import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>
    <p>
        Hola mundo desde app..component
    </p>
    <hr>
    <p [appResaltado]="'purple'">
        Hola estrellitas
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
