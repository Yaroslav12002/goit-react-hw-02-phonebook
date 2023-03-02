import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, SubmitBtn, Label, LabelSpan } from './ContactForm.styled';

class ContactForm extends Component {
  state = { name: '', number: '' };

  // -------------------------//
  // Form element control     //
  // -------------------------//
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  // -------------------------//
  // Submit                   //
  // -------------------------//
  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number, id: nanoid() });
    this.reset();
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          <LabelSpan>Name</LabelSpan>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <LabelSpan>Number</LabelSpan>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    );
  }
}

export default ContactForm;
