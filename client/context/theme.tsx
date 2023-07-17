import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    background: {
      default: '#fffff3',
      paper: '#fffff3',
      //@ts-ignore
      secondary: '#fffff373',
    },
    primary: { main: '#1a7dca' },
    secondary: { main: '#fffff373' },
    text: { primary: '#010d16', secondary: '#02a4d4' },
    mode: 'light',
  },
  //@ts-ignore
  shadows: ['none', '3px 5px 10px 0px rgba(236, 176, 176, 0.5)'],
});

export const darkTheme = createTheme({
  palette: {
    background: {
      default: '#010d16',
      paper: '#010d16',
      //@ts-ignore
      secondary: '#fffdde73',
    },
    primary: { main: '#1a7dca' },
    text: { primary: '#fffdde', secondary: '#ffffff' },
    secondary: { main: '#010d167e' },
    mode: 'dark',
  },
  //@ts-ignore
  shadows: ['none', '3px 5px 10px 0px rgba(0, 0, 0, 0.5)'],
});
