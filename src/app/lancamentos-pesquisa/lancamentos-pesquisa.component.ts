import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
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
      tipo: 'RECEITA',
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
      tipo: 'RECEITA',
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
      tipo: 'RECEITA',
      descricao: 'Compra',
      dataVencimento: '30/06/2019',
      dataPagamento: null,
      valor: 50.78,
      pessoa: 'Loja'
    },
  ];
}
