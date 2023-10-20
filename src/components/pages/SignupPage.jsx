import { Box, Button, TextField } from '@mui/material';
// import axios from 'axios';
import { Container } from 'components/App.styled';
import { LoginDiv } from 'mainStyles/styles';
import { nanoid } from 'nanoid';
// import LoadingButton from '@mui/lab/LoadingButton';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';

// const signup = async body => {
//   try {
//     const { data } = await axios.post('/users/signup', body);
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const SignupPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    // console.log({ name, email, password });
    // signup({ name, email, password });
    dispatch(signUp({ name, email, password }));
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
      >
        <LoginDiv>
          <TextField
            value={name}
            error={false}
            name="name"
            label="Username"
            onChange={handleChange}
            id={nameInputId}
          />
          <TextField
            error={false}
            name="email"
            label="Email"
            type="email"
            onChange={handleChange}
            id={emailInputId}
            value={email}
          />
          <TextField
            error={false}
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
            id={passwordInputId}
            value={password}
            //   helperText="Incorrect entry."
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
