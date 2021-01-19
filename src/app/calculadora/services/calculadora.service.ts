/** 
 * Serviço responsável por executar as operações
 * da calculadora.
 * 
 * @author Enoque T. Barbosa<znoque5@gmail.com>
 * @since 1.0.0
 */ 

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  // Define as constantes utilizadas para as operações de cálculo.
  static readonly SOMA: string = '+';
  static readonly SUB: string = '-';
  static readonly DIV: string = '/';
  static readonly MUL: string = '*';

  constructor() { }

  /** 
   * Método que Calcula uma operação matemática dado
   * dois números.
   * Suporta as operações soma, subtração, divisão,
   * e multiplicação.
   * 
   * @param n1 number Armazena o primeiro número
   * @param n2 number Armazena o segundo número
   * @param op string Operação a ser executada
   * @return number Resultado da operação
   */
  calcular(n1: number, n2: number, op: string): number{
    let r: number = 0; // Armazena o resultado da operação.

    switch(op){
      case CalculadoraService.SOMA:
        r = n1 + n2;
      break;
      case CalculadoraService.SUB:
        r = n1 - n2;
      break;
      case CalculadoraService.DIV:
        r = n1 / n2;
      break;
      case CalculadoraService.MUL:
        r = n1 * n2;
      break;
      default:
        r = 0;
    }

    return r;
  }
}
