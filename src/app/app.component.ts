import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lancamentos = [
    {
      tipo: 'DESPESA',
      descricao: 'Compra',
      dataVencimento: '30/06/2019',
      dataPagamento: null,
      valor: 50.78,
      pessoa: 'Loja'
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra',
      dataVencimento: '30/06/2019',
      dataPagamento: null,
      valor: 50.78,
      pessoa: 'Loja'
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra',
      dataVencimento: '30/06/2019',
      dataPagamento: '21/07/2019',
      valor: 50.78,
      pessoa: 'Loja'
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra',
      dataVencimento: '30/06/2019',
      dataPagamento: null,
      valor: 35.00,
      pessoa: 'Loja'
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra',
      dataVencimento: '30/06/2019',
      dataPagamento: null,
      valor: 50.78,
      pessoa: 'Loja'
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra',
      dataVencimento: '30/06/2019',
      dataPagamento: '21/07/2019',
      valor: 50.78,
      pessoa: 'Loja'
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra',
      dataVencimento: '30/06/2019',
      dataPagamento: null,
      valor: 50.78,
      pessoa: 'Loja'
    },
  ];
}
