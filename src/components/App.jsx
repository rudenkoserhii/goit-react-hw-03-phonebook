import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Wrapper, H1, H2} from './Styled/Styled';

export class App extends Component {
state = {
  contacts: [],
  filter: '',
};

componentDidMount() {
this.setState({contacts: JSON.parse(localStorage.getItem('contacts'))})
}

componentDidUpdate(_, prevState) {

if( this.state.contacts !== prevState.contacts) {
localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
}

}


addContact = (contact) => {
  if (this.state.contacts.some(({ name }) => contact.name === name)) {
    Notiflix.Notify.warning(`${contact.name}is already in contacts`);
    return}
  contact['id'] = nanoid();
  this.setState(prevState => ({ contacts: [contact, ...prevState.contacts]}));
};

filtered = (e) => {
  this.setState({ filter: e.currentTarget.value });
};

deleteContact = (id) => {
  this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id)}))
};


  render() {

    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

    return (
      <Wrapper>
        <H1>Phonebook</H1>
        <ContactForm onSubmit={this.addContact}></ContactForm>
        <H2>Contacts</H2>
        <Filter value={this.state.filter} onChange={this.filtered}></Filter>
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact}></ContactList>
      </Wrapper>
  )}
}
