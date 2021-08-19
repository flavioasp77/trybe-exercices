const { findUserById } = require('../js/exe03');

describe('Testando o exercício 2 com async e await', () => {
  it('Testando se o usuário id 1 é Mark', async () => {
    const user = await findUserById(1);
    expect(user.name).toEqual('Mark');
  });

  it('Testando se o usuário id 2 é Paul', async () => {
    const user = await findUserById(2);
    expect(user.name).toEqual('Paul');
  });

  it('Testando com id inexistente', async () => {
    expect.assertions(1);
    try {
    await findUserById(3);    
    } catch (error) {
      expect(error).toEqual(new Error(`User with 3 not found.`));
    }    
  });
});