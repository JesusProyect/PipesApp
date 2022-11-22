import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'jesus';
  nombreUper: string = 'JESUS';
  nombreTitle: string = 'jESUs NoGUEra';

  fecha: Date = new Date(); //por defecto el dia de hoy

 

}
