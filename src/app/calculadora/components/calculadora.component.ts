/** 
 * Serviço responsável por executar as operações
 * da calculadora.
 * 
 * @author Enoque T. Barbosa<znoque5@gmail.com>
 * @since 1.0.0
 */

import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent implements OnInit {

  /**
   * Variaveis privadas
   * 
   * @param n1 string
   * @param n2 string
   * @param r number
   * @param op string
   */
  private n1: string = '0';
  private n2: string = '';
  private r: number = 0;
  private op: string = '';

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.limpar();
  }

  /**
   * Inicializa todos os operadores para os valores padrão.
   * 
   * @return void
   */
  limpar(): void{
    this.n1 = '0';
    this.n2 = '';
    this.r = 0;
    this.op = '';
  }

  /**
   * Adiciona o número selecionado para o cálculo posteriormente.
   * 
   * @param string num
   * @return void
   */
  adicionarNumero(num: string): void{
    if(this.op === ''){
      this.n1 = this.concatenarNumero(this.n1, num);
    } else{
      this.n2 = this.concatenarNumero(this.n2, num);  
    }
  }

  /**
   * Retorna o valor concatenado. Trata o separador decimal.
   * 
   * @param string numAtual
   * @param string numConcat
   * @return string
   */
  concatenarNumero(numAtual: string, numConcat: string): string{
    // Caso contenha apenas '0' ou null, reinicia o valor
    if(numAtual === '0' || numAtual === ''){
      numAtual = '';
    }

    // primeiro dígito é '.', concatena '0' antes do ponto
    if(numConcat === '.' && numAtual === ''){
      return '0';
    }

    // caso '.' digitado e já contenha um '.', apenas retorna
    if(numConcat === '.' && numAtual.indexOf('.') > -1){
      return numAtual;
    }

    return numAtual + numConcat;
  }

  /**
   * Executa lógica quando um operador for selecionado.
   * 
   * Caso já possua uma operação selecionada, execute a
   * operação anterior, e define a nova operação.
   * 
   * @param string operacao
   * @return void
   */
  definirOperacao(operacao: string): void{
    // apenas define a operação caso não exista uma
    if(this.op === ''){
      this.op = operacao;
      return;
    }

    /* caso a operação definida e número 2 selecionado,
       efetua o cálculo da operação */
    if(this.n2 !== ''){
      this.r = this.calculadoraService.calcular(
        parseFloat(this.n1),
        parseFloat(this.n2),
        this.op
      );
      this.op = operacao;
      this.n1 = this.r.toString();
      this.n2 = '';
      this.r = 0;
    }
  }

  /**
   * efetua o cálculo de uma operação.
   * 
   * @return void
   */
  calcular(): void{
    if(this.n2 === ''){
      return;
    }

    this.r = this.calculadoraService.calcular(
      parseFloat(this.n1),
      parseFloat(this.n2),
      this.op
    );
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   * 
   * @return string
   */
  get display(): string{
    if(this.r !== 0){
      return this.r.toString();
    }
    /*if(this.op !== ''){
      return this.op;
    }*/
    if(this.n2 !== ''){
      return this.n2;
    }
    return this.n1;
  }

}
