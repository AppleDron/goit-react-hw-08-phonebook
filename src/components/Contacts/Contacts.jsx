import React, { useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContactInfo,
  ContainerContacts,
  List,
  ListItem,
  SectionTitle,
  SectionsContainer,
  StyledButton,
  StyledError,
} from './Contacts.styled';
import { deleteContact, getContactsThunk } from 'redux/contacts/operations';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';

const Contacts = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <ContainerContacts>
      <SectionsContainer>
        <SectionTitle>Contacts</SectionTitle>
        {children}
        {isLoading && !error && <StyledError>In progress...</StyledError>}
        {error && <StyledError>Error!</StyledError>}
        <List>
          {filteredContacts.map(contact => (
            <ListItem key={contact.id}>
              <ContactInfo>
                {contact.name}: <span>{contact.number}</span>
              </ContactInfo>
              <StyledButton
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                <AiFillDelete />
              </StyledButton>
            </ListItem>
          ))}
        </List>
      </SectionsContainer>
    </ContainerContacts>
  );
};

export default Contacts;
