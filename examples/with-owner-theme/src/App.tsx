import { useEffect, useState } from 'react';
import { AstroThemeClasses, AstroThemeProvider } from '@astrouxds/mui-theme';
import { ownerTheme } from 'themes/owner-theme';
import { ThemeSwitch } from 'components/theme-switch';
import { MainLayout } from 'layouts/main-layout';

const App = () => {
  const [astroTheme, setAstroTheme] = useState<AstroThemeClasses>('dark-theme');
  const mode = astroTheme === 'light-theme' ? 'light' : 'dark';

  useEffect(() => {
    let className: string = astroTheme;

    if (document.body.className) {
      className = `${astroTheme} ${document.body.className}`;
    }

    document.body.className = className;

    return () => {
      document.body.className = '';
    };
  }, [astroTheme]);

  return (
    <AstroThemeProvider debug={true} mode={mode} theme={ownerTheme(mode)}>
      <ThemeSwitch {...{ mode, setAstroTheme }} />
      <MainLayout />
    </AstroThemeProvider>
  );
};

export default App;
