import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:string="alberto";
  nombreUpper:string="ALBERTO";
  nombreCompleto:string="aLberTo saIZ";

  fecha:Date= new Date();
}
