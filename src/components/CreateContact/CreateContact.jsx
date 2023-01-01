import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { EnterLabel, EnterInput, StyledButton } from '../App.styled';
import { useState } from 'react';

const CreateContact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => setName(e.currentTarget.value);
  const handleChangeNumber = e => setNumber(e.currentTarget.value);
  const handleSubmit = e => {
    e.preventDefault();
    console.log('all work');
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

// class CreateContact extends Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     this.setState({
//       [e.currentTarget.name]: e.currentTarget.value,
//     });
//   };
//   handleSubmit = e => {
//     const { name, number } = this.state;
//     e.preventDefault();

//     this.props.onSubmit(name, number);
//     this.setState({
//       name: '',
//       number: '',
//     });
//     // e.target.name.value = '';
//     // e.target.number.value = '';
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="flex-start"
//         as="form"
//         onSubmit={this.handleSubmit}
//       >
//         <EnterLabel>
//           Name:
//           <EnterInput
//             type="text"
//             name="name"
//             value={name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//           />
//         </EnterLabel>

//         <EnterLabel>
//           Number:
//           <EnterInput
//             type="tel"
//             name="number"
//             value={number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//           />
//         </EnterLabel>
//         <StyledButton type="submit">Add contact</StyledButton>
//       </Box>
//     );
//   }
// }

export default CreateContact;
