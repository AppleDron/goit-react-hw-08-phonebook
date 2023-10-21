import { Box, Button, TextField } from '@mui/material';
import { Container } from 'components/App.styled';
import { LoginDiv } from 'mainStyles/styles';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';

const SignupPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    name === '' ? setErrorName(true) : setErrorName(false);
    email === '' ? setErrorEmail(true) : setErrorEmail(false);
    password === '' ? setErrorPassword(true) : setErrorPassword(false);

    if (name && email && password) dispatch(signUp({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': {
            m: 1,
            display: 'block',
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh',
        }}
        noValidate
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      >
        <LoginDiv>
          <TextField
            value={name}
            error={errorName}
            name="name"
            label="Username"
            onChange={handleChange}
            id={nameInputId}
            helperText={errorName && 'Please type a name'}
          />
          <TextField
            error={errorEmail}
            name="email"
            label="Email"
            type="email"
            onChange={handleChange}
            id={emailInputId}
            value={email}
            helperText={errorEmail && 'Please type an email'}
          />
          <TextField
            error={errorPassword}
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
            id={passwordInputId}
            value={password}
            helperText={errorPassword && 'Please type a password'}
          />
          <Button
            variant="outlined"
            type="submit"
            sx={{
              display: 'block',
              margin: ' 0 auto',
              backgroundColor: 'rgb(35, 30, 57)',
              color: '#a69ad2',
              outline: 'none',
              ':hover': {
                backgroundColor: 'rgb(83, 73, 128)',
              },
            }}
          >
            Sign Up
          </Button>
        </LoginDiv>
      </Box>
    </Container>
  );
};

export default SignupPage;
