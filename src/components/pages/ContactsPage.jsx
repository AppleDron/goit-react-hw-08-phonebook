import React from 'react';
import Contacts from 'components/Contacts/Contacts';
import SearchQuery from 'components/SearchQuery/SearchQuery';
import ContactForm from 'components/Form/Form';
import {
  ContainerContacts,
  Section,
  SectionForm,
  SectionsContainer,
} from 'components/Contacts/Contacts.styled';

const ContactsPage = () => {
  return (
    <ContainerContacts>
      <SectionsContainer>
        <SectionForm>
          <ContactForm />
        </SectionForm>
        <Section>
          <Contacts>
            <SearchQuery />
          </Contacts>
        </Section>
      </SectionsContainer>
    </ContainerContacts>
  );
};

export default ContactsPage;
