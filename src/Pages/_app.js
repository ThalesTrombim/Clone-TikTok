import { ThemeProvider } from 'styled-components';
import {GlobalStyle} from '../Styles/global';
import theme from '../Styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}