import { Component } from '@angular/core';
import { Conta } from '../Models/Conta';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  conta:Conta = { agencia: 1, conta: 2, id: 3, saldo: 10000};

  constructor() {}

}
