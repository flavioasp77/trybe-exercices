import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      name: '',
      opcao: '',      
      resume: '',
      check: false,
    }

  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <section>
        <h1>Meu form</h1>
        <form>
          <label>Nome:</label>
          <input 
            type="text" 
            name="name" 
            value={this.state.name} 
            onChange={this.handleChange}
          />
          
          <select 
            name="opcao" 
            value={this.state.opcao} 
            onChange={this.handleChange} 
          >
            <option value="opção 1">opção 1</option>
            <option value="opção 2">opção 2</option>
            <option value="opção 3">opção 3</option>
            <option value="opção 4">opção 4</option>
          </select>
          
          <label for="resume">Resumo:</label>
          <textarea 
            type="textarea"
            id="resume"
            name="resume"
            value={this.state.resume} 
            onChange={this.handleChange}
          />
          <input 
            type="checkbox" 
            name="check" 
            id="check" 
            onChange={this.handleChange}
          />
          <label for="check">Marque ou não marque</label>
        </form>
      </section>
    );
  }
}

export default Form;
