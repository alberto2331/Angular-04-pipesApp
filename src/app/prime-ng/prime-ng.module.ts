import { NgModule } from '@angular/core';

//PrimeNg
import { ButtonModule } from 'primeng/button';//modulo para el boton
import { CardModule } from 'primeng/card';//modulo para la tarjeta
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset'; //modulo para las animaciones
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

@NgModule({

  exports: [
    ButtonModule,
    FieldsetModule,
    CardModule,
    MenubarModule,    
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
