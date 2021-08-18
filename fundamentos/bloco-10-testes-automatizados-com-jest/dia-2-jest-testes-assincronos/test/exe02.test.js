const {
  findUserById,
  getUserName,
} = require('../js/exe02');

describe('Testando usuários', () => {
  it('Testando se o usuário id 1 é Mark', () => (
    findUserById(1).then((user) => {
      expect(user.name).toEqual('Mark');
    })
  ));

  it('Testando se o usuário id 2 é Paul', () => (
    findUserById(2).then((user) => {
      expect(user.name).toEqual('Paul');
    })
  ));
});