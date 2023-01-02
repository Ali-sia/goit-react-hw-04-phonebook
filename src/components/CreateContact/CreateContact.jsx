import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { EnterLabel, EnterInput, StyledButton } from '../App.styled';

const CreateContact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => setName(e.currentTarget.value);
  const handleChangeNumber = e => setNumber(e.currentTarget.value);
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      as="form"
      onSubmit={handleSubmit}
    >
      <EnterLabel>
        Name:
        <EnterInput
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeName}
        />
      </EnterLabel>

      <EnterLabel>
        Number:
        <EnterInput
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeNumber}
        />
      </EnterLabel>
      <StyledButton type="submit">Add contact</StyledButton>
    </Box>
  );
};

CreateContact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default CreateContact;
