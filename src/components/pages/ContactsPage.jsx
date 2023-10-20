import React from 'react';
import Contacts from 'components/Contacts/Contacts';
import SearchQuery from 'components/SearchQuery/SearchQuery';
import ContactForm from 'components/Form/Form';
import { Container } from 'components/App.styled';

const ContactsPage = () => {
  return (
    <Container>
      <ContactForm />
      <Contacts>
        <SearchQuery />
      </Contacts>
    </Container>
  );
};

export default ContactsPage;
