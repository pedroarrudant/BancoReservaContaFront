import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from '../Models/Reserva';

@Component({
  selector: 'app-sonho',
  templateUrl: './sonho.page.html',
  styleUrls: ['./sonho.page.scss'],
})
export class SonhoPage implements OnInit {

  constructor(private route: ActivatedRoute){}

  idCliente: number;
  saldoConta: 1000;

  reservas = [
    { id: 1, idCliente: 1, nome: "Viajar", saldo: 1000},
    { id: 2, idCliente: 2, nome: "Comprar um carro", saldo: 2000},
    { id: 3, idCliente: 3, nome: "Pagar um casamento", saldo: 3000}
  ]

  ngOnInit():void{
    const firstParam: string = this.route.snapshot.queryParamMap.get('id');
    console.log(firstParam);

    this.route.queryParams.subscribe(params => {
      console.log(params['userId']);
      this.idCliente = params['userId'];
    });
  }

  buttonClick()
  {
    alert(this.idCliente);
  }
}
