import { Box, TextField } from '@mui/material';
import React from 'react';

export default function LoginPage() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '28ch' },
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
          error={false}
          id="email"
          label="Email"
          sx={{ display: 'block' }}
        />
        <TextField
          error={false}
          id="password"
          label="Password"
          sx={{ display: 'block' }}
          //   helperText="Incorrect entry."
        />
      </div>
    </Box>
  );
}
