import React, { Component } from 'react';
import style from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, contacts } = this.state;

    contacts.push(name);
    console.log(`Name: ${name}, ${contacts}`);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <div className={style.header}>
          <div className={style.inicial}>
            <form className={style.form} type="submit" onSubmit={this.handleSubmit}>
              <label>
                <h2 className={style.title}>Name</h2>
                <input
                  type='text'
                  name='name'
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </label>
              <button type="submit">Add contact</button>
            </form>

            <div className={style.contact}>
              <h2 className={style.title}>Contacts</h2>
              {this.state.contacts.map((contact, index) => {
                return (<li key={index}>{contact}</li>)
              })}
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default App;
