import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      name: '',
      resume: '',
    }

  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
    })
  }

  render() {
    return (
      <section>
        <h1>Meu form</h1>
        <form>
          <label>Nome:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          <select name="opcao">
            <option value="opção 1">opção 1</option>
            <option value="opção 2">opção 2</option>
            <option value="opção 3">opção 3</option>
            <option value="opção 4">opção 4</option>
          </select>
          <label>Resumo:</label>
          <input type="textarea" name="resume" />
        </form>
      </section>
    );
  }
}

export default Form;
