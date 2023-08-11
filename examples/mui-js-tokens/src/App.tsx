import { useState } from 'react';
import {
  AppBar,
  Card,
  Stack,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import AstroProvider from './AstroProvider';

const App = () => {
  const [isLight, setIsLight] = useState(false);
  const handleSwitch = () => setIsLight((prev) => !prev);

  return (
    <AstroProvider mode={isLight ? 'light' : 'dark'}>
      <AppBar position='static'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant='body1Bold'>Astro MUI Theme</Typography>
          <Stack flexDirection='row' alignItems='center'>
            <Typography>{isLight ? 'Light' : 'Dark'} Mode</Typography>

            <Switch checked={isLight} onChange={handleSwitch} />
          </Stack>
        </Toolbar>
      </AppBar>
      <Card
        sx={{
          p: (theme) => {
            console.log(theme);
            return 4;
          },
        }}
      >
        Some card
      </Card>
    </AstroProvider>
  );
};

export default App;
