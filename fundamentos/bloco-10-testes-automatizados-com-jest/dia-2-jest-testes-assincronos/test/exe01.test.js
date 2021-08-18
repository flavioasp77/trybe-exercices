const { uppercase } = require('../js/exe01');

test('Verifica a chamada do callback da função uppercase', (done) => {
  uppercase('flavio', (callback) => {
    expect(callback).toBe('FLAVIO')
    done();
  });
});