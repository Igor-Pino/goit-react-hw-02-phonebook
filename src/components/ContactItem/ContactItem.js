import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.scss';

const ContactItem = ({ contact, onDeleteContact }) => (
  <>
    <div className="contact">
      <span className="contact_name">{contact.name}</span>
      <span className="contact_number">{contact.number}</span>
    </div>
    <button onClick={() => onDeleteContact(contact.id)} className="contact_btn">
      X
    </button>
  </>
);

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
