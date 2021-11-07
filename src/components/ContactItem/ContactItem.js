import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.scss';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li key={contact.id} className={s.contactItem}>
    <div className="contact">
      <span className={s.contact_name}>{contact.name}</span>
      <span className={s.contact_number}>{contact.number}</span>
    </div>
    <button onClick={() => onDeleteContact(contact.id)} className={s.contact_btn}>
      X
    </button>
  </li>
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
