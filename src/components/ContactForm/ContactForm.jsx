import { ContactFormStyled, Button, Label, Input } from './ContactForm.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';


export class ContactForm extends Component {
state = {
    name: '',
    number: '',
}

handlerChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
}

handlerSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    e.target.reset();
};


    render() {
        const nameId = nanoid();
        const numberId = nanoid();
        return (
            <ContactFormStyled onSubmit={this.handlerSubmit} id="form">
                <Label htmlFor={nameId}>Name
                    <Input
                    type="text"
                    id={nameId}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. 
                    For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handlerChange}/>
                </Label>
                <Label htmlFor={numberId}>Number
                    <Input
                    type="tel"
                    id={numberId}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handlerChange}/>
                </Label>
                <Button type="submit">Add contact</Button>
            </ContactFormStyled>
)}};


// ContactForm.propTypes = {
//     options: PropTypes.array.isRequired,
//     onLeaveFeedback: PropTypes.func.isRequired,
// };