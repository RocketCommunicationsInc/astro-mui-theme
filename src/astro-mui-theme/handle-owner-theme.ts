import { Theme } from '@mui/material';

export const handleOwnerTheme = (astroTheme: Theme, ownerTheme: Theme, debug: boolean): Theme => {
  if (debug) {
    console.log('[ASTRO THEME]:', astroTheme);
    console.log('[OWNER THEME]:', ownerTheme);
  }

  return {
    // owner overrides
    ...astroTheme,
    ...ownerTheme,
    palette: {
      // astro overrides
      ...astroTheme.palette,
    },
    shape: {
      // astro overrides
      ...astroTheme.shape,
    },
    typography: {
      // astro overrides
      ...astroTheme.typography,
    },
  };
};
