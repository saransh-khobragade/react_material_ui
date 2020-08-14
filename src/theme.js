import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#045C74',
      // dark: '#045C74',
      // light: '#045C74',
    },
    secondary: {
      main: '#f0f4f7',
      // dark: '#16c18c',
      // light: '#e3f8f2',
    },
    text: {
      primary: '#045C74',
      // secondary: '#045C74',
      // disabled: '#030303',
    }
  },
  overrides: {
    // Style sheet name ⚛️
    MuiDrawer: {
      // Name of the rule
      root: {
        // Some CSS
        
      },
    },
  },
});

export default theme;
