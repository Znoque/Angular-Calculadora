import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Testa o calculo de soma da calculadora
  it('deve garantir que 2 + 2 = 4',
   inject([CalculadoraService], (service: CalculadoraService) => {
     let soma = service.calcular(2, 2, CalculadoraService.SOMA);
     expect(soma).toEqual(4);
   })
  );

  // Testa o calculo de subtração da calculadora
  it('deve garantir que 10 - 5 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let sub = service.calcular(10, 5, CalculadoraService.SUB);
      expect(sub).toEqual(5);
    })
  );
  
  // Testa o calculo de divisão da calculadora
  it('deve garantir que 8 / 4 = 2',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let div = service.calcular(8, 4, CalculadoraService.DIV);
      expect(div).toEqual(2);
    })
  );

  // Testa o calculo de multiplicação da calculadora
  it('deve garantir que 4 X 4 = 16',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multi = service.calcular(4, 4, CalculadoraService.MUL);
      expect(multi).toEqual(16);
    })
  );

  // Testa uma operação inválida da calculadora
  it('deve retornar 0 para operação inválida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let opInvalida = service.calcular(1, 2, '%');
      expect(opInvalida).toEqual(0);
    })
  );

});
