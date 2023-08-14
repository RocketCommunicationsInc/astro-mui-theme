import { CssBaseline, ThemeProvider } from '@mui/material';
import { AstroThemeOptions, astroTheme } from './astroTheme';

type AstroProviderProps = AstroThemeOptions & {
  children: React.ReactNode;
};

const AstroProvider = ({ children, mode }: AstroProviderProps) => {
  const theme = astroTheme({ mode });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AstroProvider;
