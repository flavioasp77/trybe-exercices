import React from 'react';
import { render } from '@testing-library/react';
import Digimon from './Digimon';



describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    const {
      getByText
    } = render(<App />)

    const digimon = [{
      name: 'Agumon',
      level: 'rookie',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg'
    }];

    const digimonName = getByText(digimon.name);
    const digimonLevel = getByText(digimon.level);
    const digimonImage = getByText(digimon.img);

    expect(digimonName).toBeInTheDocument();
    expect(digimonLevel).toBeInTheDocument();
    expect(digimonImage).toBeInTheDocument();
  });
});