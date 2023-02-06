## Astro UXDS Mui Theme

A MUI Theme Provider which overrides some of the default MUI Theme with Astro UXDS styling and adds an "astro" property on the MUI Theme making Astro Design Tokens available.

## Install

```bash
npm install @astrouxds/mui-theme
```

## Getting Started

```tsx
import { AstroThemeProvider } from '@astrouxds/mui-theme';

const App = () => (
  <AstroThemeProvider>
    <Box
      sx={(theme) => {
        // All of the astro design tokens on the MUI theme
        console.log(theme.astro);

        return {
          // including a spacing function using the astro spacing formula
          padding: theme.astro.spacing(4),
        };
      }}
    >
      App
    </Box>
  </AstroThemeProvider>
);
```

## With Owner Custom Theme

```tsx
import { AstroThemeProvider, astroTokens } from '@astrouxds/mui-theme';
import { createTheme, Link } from '@mui/material';

// get astro design tokens for use on a custom theme
const astro = astroTokens();

const ownerTheme = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: astro.background.surface.default,
        },
      },
      defaultProps: {
        disablePadding: true,
      },
    },
  },
});

const App = () => {
  return (
    <AstroThemeProvider theme={ownerTheme}>
      <List>Mui List</List>
    </AstroThemeProvider>
  );
};
```

## Examples

See the [with-owner-theme example](https://github.com/RocketCommunicationsInc/astro-mui-theme/tree/main/examples/with-owner-theme) for a more indepth example app including dark and light theme switching.
