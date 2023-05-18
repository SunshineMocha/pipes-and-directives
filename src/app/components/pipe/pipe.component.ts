import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {
  user: any = {
    username: "codermonkey",
    name: "nicoló", // (1) mi serve un pipe che trasforma in uppercase la prima lettera
    surname: "esposito", // ...
    yob: 1999, // mi serve un pipe che mi mostri l'etá dell'utente
    description: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
    // mi serve un pipe per troncare la descrizione dopo 30 caratteri e aggiunga 3 puntini
    // creo una cartella per contenere i pipes e creo il pipe con "NG G P NOME-PIPE". CONTINAU SU FIRST-UPPER
  }

  constructor(){

  }
}
export interface User {
  username: string
  name: string
  surname: string
  yob: number
  description: string
}

