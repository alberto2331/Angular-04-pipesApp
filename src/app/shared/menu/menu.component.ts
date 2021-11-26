import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[]= []; //lo inicializo en cero
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label:'Pipes de Angular',
      icon:'pi pi-desktop',
      items:[
      {
       label:'Textos y fechas',
       icon:'pi pi-align-left',
       routerLink:'cualquierCosa' 
      },
      {
        label:'Números',
        icon:'pi pi-dollar',
        routerLink:'numeros' 
       },
       {
        label:'No comunes',
        icon:'pi pi-globe',
        routerLink:'no-comunes' 
       }
    ]
      },
      {
      label:'Pipes Personalizados',
      icon:'pi pi-cog',
      routerLink: 'ordenar'
      }
    ];
  }
}
