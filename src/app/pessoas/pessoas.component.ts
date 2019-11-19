import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent  {

pessoas = [
  {
    nome: 'Manoel Pinheiro' ,
    cidade: 'Uberlândia',
    estado: 'MG',
    status: true
  },
  {
    nome: 'Sebastião da Silva' ,
    cidade: 'São Paulo',
    estado: 'SP',
    status: false
  },
  {
    nome: 'Carla Souza' ,
    cidade: 'Florianópolis',
    estado: 'SC',
    status: true
  },
  {
    nome: 'Luiz Pereira' ,
    cidade: 'Curitiba',
    estado: 'PR',
    status: false
  },
  {
    nome: 'Vilmar Andrade' ,
    cidade: 'Rio de Janeiro',
    estado: 'RJ',
    status: true
  },
  {
    nome: 'Diego Tesch' ,
    cidade: 'Colatina',
    estado: 'ES',
    status: false
  },
  {
    nome: 'André Carlos Oliveira' ,
    cidade: 'Cuiabá',
    estado: 'AL',
    status: true
  },
  {
    nome: 'Scharlienny Silva Tesch' ,
    cidade: 'Vila Velha',
    estado: 'ES',
    status: false
  }
];

}
