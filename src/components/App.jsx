import { Container, Title } from './App.styled';
// import Contacts from './Contacts/Contacts';
// import ContactForm from './Form/Form';
import React from 'react';
// import SearchQuery from './SearchQuery/SearchQuery';
import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ContactsPage from './pages/ContactsPage';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
