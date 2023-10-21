import { IconButton } from '@mui/material';
import { AddressBookIcon, HomeContainer, MainTitle } from 'mainStyles/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const HomePage = () => {
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);

  const handleClick = () => {
    token ? navigate('/contacts') : navigate('/login');
  };

  return (
    <HomeContainer>
      <MainTitle>All your contacts in one place</MainTitle>
      <IconButton
        size="large"
        color="white"
        sx={{ display: 'block', textAlign: 'center', margin: '0 auto' }}
        onClick={handleClick}
      >
        <AddressBookIcon />
      </IconButton>
    </HomeContainer>
  );
};

export default HomePage;
