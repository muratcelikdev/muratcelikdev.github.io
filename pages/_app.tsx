import type { AppProps } from 'next/app';

import GlobalStyle from 'src/theme/GlobalStyle';
import ThemeProvider from 'src/theme/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
