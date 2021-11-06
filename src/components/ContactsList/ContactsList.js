import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import './ContactsList.scss';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contact_list">
      {contacts.map(contact => (
        <li key={contact.id} className="contactItem">
          <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
