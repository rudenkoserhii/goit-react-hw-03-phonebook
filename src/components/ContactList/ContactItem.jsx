import { Button } from '../ContactForm/ContactForm.styled';
import { Name, Number, ContactItemStyled } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({id, name, number, onDeleteTransit}) => {

    const onDelete = () => {
        onDeleteTransit(id)
    };

    return  <ContactItemStyled>
                <Name>{name}: </Name>
                <Number>{number}</Number>
                <Button onClick={onDelete}>Delete</Button>
            </ContactItemStyled>
};


ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteTransit: PropTypes.func,
};