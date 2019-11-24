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
      dataVencimento: new Date(2019, 5, 30),
      dataPagamento: null,
      valor: 12500.87,
      pessoa: 'Loja'
    },
    {
      tipo: 'RECEITA',
      descricao: 'Compra',
      dataVencimento: new Date(2019, 8, 22),
      dataPagamento: null,
      valor: 187.55,
      pessoa: 'Loja'
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra',
      dataVencimento: new Date(2019, 0, 17),
      dataPagamento: new Date(2019, 6, 21),
      valor: 80000,
      pessoa: 'Loja'
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra',
      dataVencimento: new Date(2018, 11, 13),
      dataPagamento: null,
      valor: 3870.29,
      pessoa: 'Loja'
    },
    {
      tipo: 'RECEITA',
      descricao: 'Compra',
      dataVencimento: new Date(2018, 9, 31),
      dataPagamento: null,
      valor: 87.65,
      pessoa: 'Loja'
    },
    {
      tipo: 'DESPESA',
      descricao: 'Compra',
      dataVencimento: new Date(2019, 1, 10),
      dataPagamento: new Date(2019, 1, 9),
      valor: 12009837.87,
      pessoa: 'Loja'
    },
    {
      tipo: 'RECEITA',
      descricao: 'Compra',
      dataVencimento: new Date(2019, 3, 15),
      dataPagamento: null,
      valor: 876.45,
      pessoa: 'Loja'
    },
  ];
}
