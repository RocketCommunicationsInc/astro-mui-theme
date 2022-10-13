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
      // owner overrides
      ...ownerTheme.components,
      // astro overrides
      MuiList: {
        ...astroTheme.components?.MuiList,
      },
      // astro overrides
      MuiListItemButton: {
        ...astroTheme.components?.MuiListItemButton,
      },
    },
    palette: {
      // astro overrides
      ...astroTheme.palette,
    },
    typography: {
      // astro overrides
      ...astroTheme.typography,
    },
  };
};
