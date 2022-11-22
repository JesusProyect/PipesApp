import { Component } from '@angular/core';
import { interval } from 'rxjs'

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nPluralPipe
  clientes: string[] = ['Maria', 'Pedro','Hernano','Eduardo', 'Fernando'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1':'tenemos 1 cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  eliminarCliente(): void{
    this.clientes.splice(0 , 1);
  }


  //i18nSelectPipe
  nombre: string = 'Jesus';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  cambiarPersona(): void{
    switch(this.nombre){
      case 'Jesus': {this.nombre = 'Elena'; this.genero = 'femenino'};
      break;
      default: {this.nombre = 'Jesus'; this.genero = 'masculino'}
    }
  }

  //key value pipe

  persona = {
    nombre: 'Jesus',
    edad: 28,
    direccion: 'Madrid, España'
  }

  //JsonPipe

  heroes = [
    {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre:'Robin',
    vuela:false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
]

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise ((resolve, reject) =>  {

    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);

  });

}
