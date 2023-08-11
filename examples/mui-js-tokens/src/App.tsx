import { useState } from 'react';
import { AppBar, Card, CardContent, Container, Stack, Switch, Toolbar, Typography } from '@mui/material';
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
      <Container
        sx={{
          my: (theme) => {
            console.log(theme);
            return 8;
          },
        }}
      >
        <Stack spacing={4}>
          {Array(6)
            .fill(null)
            .map(() => (
              <Card>
                <CardContent>
                  <Typography variant='h1Bold'>Card H1 Bold Heading</Typography>
                </CardContent>
              </Card>
            ))}
        </Stack>
      </Container>
    </AstroProvider>
  );
};

export default App;
