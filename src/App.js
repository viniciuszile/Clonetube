import React from 'react';
import { ThemeProvider, createMuiTheme} from '@material-ui/core';
import Home from '../src/Componentes/Home/Home';



function App() {

  const theme = createMuiTheme({
    spacing: 4,
      primary: {
        main: '#3EA6FF',
      },

  });
  
  return (
    <ThemeProvider theme={theme}>
      <Home  />
    </ThemeProvider>
  );
}

export default App;
