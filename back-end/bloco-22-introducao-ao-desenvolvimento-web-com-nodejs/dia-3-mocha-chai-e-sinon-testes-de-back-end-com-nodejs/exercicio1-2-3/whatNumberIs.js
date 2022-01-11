module.exports = {
  whatNumberIs: (number) => {
    if (number > 0) {
      return 'Positivo';
    }
    if (number === 0) {
      return 'Neutro';
    }
    return 'Negativo';
  }
}