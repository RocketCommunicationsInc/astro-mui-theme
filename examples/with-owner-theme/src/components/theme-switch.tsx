import { Stack, Typography } from '@mui/material';
import { RuxButton } from '@astrouxds/react';
import type { AstroThemeClasses, Mode } from '@astrouxds/mui-theme';

type ThemeSwitchProps = {
  mode: Mode;
  setAstroTheme: React.Dispatch<React.SetStateAction<AstroThemeClasses>>;
};

export const ThemeSwitch = ({ mode, setAstroTheme }: ThemeSwitchProps) => {
  const handleTheme = () => {
    setAstroTheme((prev) => {
      if (prev === 'dark-theme') {
        return 'light-theme';
      }

      return 'dark-theme';
    });
  };

  return (
    <Stack direction='row' alignItems='center' spacing={2} p={4}>
      <RuxButton onClick={handleTheme}>Switch Theme</RuxButton>
      <Typography variant='h3'>{mode.charAt(0).toUpperCase() + mode.slice(1)} Theme</Typography>
    </Stack>
  );
};
