import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { sizing, ThemeProvider, typography } from '@mui/system';
import gifSurf from './assets/imgs/surf.gif'

export default function App() {
  return(
    <Box
      id="bg"
      component="form"
      sx={{
        height: '98vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper elevation={16}  
        sx={{
          width: '23rem',
          height: '30rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6
        }} >
          <img src={gifSurf}></img>
          <h1 class="loginText">Realize seu Login por favor</h1>
          <TextField id="outlined-basic" label="E-mail" variant="outlined" sx={{ marginBottom: '1ch' }} />
          <TextField id="outlined-basic" label="Senha" variant="outlined" sx={{ marginBottom: '3rem' }} />
          <Button variant="contained">Acessar</Button>
      </Paper>
    </Box>
  );
}