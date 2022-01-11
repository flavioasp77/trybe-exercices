const { expect } = require('chai');
const { whatNumberIs } = require('../whatNumberIs');

let number = -1;

describe('Chama a função para testar um numero', () => {
  const reposta = whatNumberIs(number);
  
  describe('Se o numero for', () => {
    it('positivo', () => {
      expect(reposta).to.be.equals('Positivo');
    });
    it('negativo', () => {
      expect(reposta).to.be.equals('Negativo');
    });
    it('neutro', () => {
      expect(reposta).to.be.equals('Neutro');
    });
  });
})