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
    components: {
      // astro overrides
      ...ownerTheme.components,
      ...astroTheme.components,
    },
    palette: {
      // astro overrides
      ...ownerTheme.palette,
      ...astroTheme.palette,
    },
    shape: {
      // astro overrides
      ...astroTheme.shape,
    },
    typography: {
      // astro overrides
      ...ownerTheme.typography,
      ...astroTheme.typography,
    },
  };
};
