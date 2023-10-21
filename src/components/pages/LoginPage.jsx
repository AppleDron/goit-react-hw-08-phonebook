import { Box, Button, TextField } from '@mui/material';
import { Container } from 'components/App.styled';
import { ErrorMessage } from 'mainStyles/styles';
// import { ErrorMessage } from 'mainStyles/styles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logIn } from 'redux/auth/operations';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const error = useSelector(state => state.auth.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value.trim());
        break;
      case 'password':
        setPassword(value.trim());
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    email === '' ? setErrorEmail(true) : setErrorEmail(false);
    password === '' ? setErrorPassword(true) : setErrorPassword(false);

    if (email && password) {
      dispatch(logIn({ email, password }));
      token ?? navigate('/contacts');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh',
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            type="email"
            name="email"
            value={email}
            error={errorEmail}
            id="email"
            label="Email"
            sx={{ display: 'block' }}
            onChange={handleChange}
            helperText={errorEmail && 'Please type an email'}
          />
          <TextField
            type="password"
            name="password"
            value={password}
            error={errorPassword}
            id="password"
            label="Password"
            sx={{ display: 'block' }}
            onChange={handleChange}
            helperText={errorPassword && 'Please type a password'}
          />
          {error && <ErrorMessage>Incorrect email or password</ErrorMessage>}
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
            Log In
          </Button>
        </div>
      </Box>
    </Container>
  );
}
