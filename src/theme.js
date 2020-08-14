import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#045C74',
      dark: '#045C74',
      light: '#045C74',
    },
    secondary: {
      main: '#f0f4f7',
      dark: '#16c18c',
      light: '#e3f8f2',
    },
    text: {
      primary: '#2e2e2e',
      secondary: '#566690',
      disabled: '#030303',
    }
  }
});

export default theme;
