import { Label, Input } from '../ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';


export const Filter = ({ value, onChange}) =>{
        const filterId = nanoid();
        return <Label htmlFor={filterId}>Find contacts by name
                <Input type="text" id={filterId} name="filter" onChange={onChange} value={value}/>
                </Label>
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

