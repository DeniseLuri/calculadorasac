import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
@track valordaentrada;
@track valortotalfinanciamento;
@track parcelasdofinanciamento;

resultado1;
resultado2;
resultado3;


entrada(event){
  this.valordaentrada=Number(event.target.value);  
}

valortotal(event){
  this.valortotalfinanciamento=Number(event.target.value);
}

parcelas(event){
  this.parcelasdofinanciamento=Number(event.target.value);  
}
//https://www.zapimoveis.com.br/blog/comprar/calculo-das-parcelas-do-financiamento/
//SAC - é necessário somar os juros. Para isso, basta multiplicar o valor total pelos juros mensais 
//(R$ 500 mil x 0,58% = 290.000).
//Depois, some os valores e dividir pelo total de meses (500.000 + 290.000 / 360 = 2.194,44).

calcular(){
 
  this.resultado1= this.valortotalfinanciamento-this.valordaentrada
  this.resultado2=  (this.resultado1*0.58);
  this.resultado3= (this.resultado1 + this.resultado2)/this.parcelasdofinanciamento;
  
    }
}

