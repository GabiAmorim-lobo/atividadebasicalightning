import { LightningElement } from "lwc";

export default class App extends LightningElement {

obj = {
  nome : "Web Carros",
  cnpj : "18765904000123",
  endereco : "Rua dos Bobos",
  nomeProduto : "Evoque",
  descricao : "Carro lindo",
  preco : 100000,
  promo1 : "10% desconto",
  promo2 : "20% desconto",

}


visivel = true;

onClick(){
  this.visivel = false;
} 

}