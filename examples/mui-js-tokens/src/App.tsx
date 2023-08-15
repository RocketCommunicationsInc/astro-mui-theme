import { useState } from 'react';
import {
  AppBar,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';

import AstroProvider from './AstroProvider';
import LoginForm from './LoginForm';

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
      <Container sx={{ my: 8 }}>
        <Stack spacing={4}>
          <Stack flexDirection='row' justifyContent='space-between'>
            <Stack spacing={3}>
              <Typography variant='display1'>Display 1</Typography>
              <Typography variant='display2'>Display 2</Typography>
              <Typography variant='h1'>Heading 1</Typography>
              <Typography variant='h1Bold'>Heading 1 Bold</Typography>
              <Typography variant='h2'>Heading 2</Typography>
              <Typography variant='h3'>Heading 3</Typography>
              <Typography variant='h4'>Heading 4</Typography>
              <Typography variant='h5'>Heading 5</Typography>
              <Typography variant='h6'>Heading 6</Typography>
              <Typography variant='body1'>Body 1</Typography>
              <Typography variant='body1Bold'>Body 1 Bold</Typography>
              <Typography variant='body2'>Body 2</Typography>
              <Typography variant='body2Bold'>Body 2 Bold</Typography>
              <Typography variant='body3'>Body 3</Typography>
              <Typography variant='body3Bold'>Body 3 Bold</Typography>
              <Typography variant='controlBody1'>Control Body</Typography>
              <Typography variant='controlBody1Bold'>
                Control Body 1 Bold
              </Typography>
            </Stack>

            <LoginForm />
          </Stack>

          <Divider />

          <Stack spacing={4}>
            {Array<string>(2)
              .fill('card:')
              .map((card, i) => (
                <Card key={card + (i + 1)}>
                  <CardContent>
                    <Typography variant='h1Bold'>
                      Card H1 Bold Heading
                    </Typography>
                    <Typography variant='body1Bold'>
                      Some Body 1 Bold Text
                    </Typography>
                    <Typography color={({ astro }) => astro.ColorTextSecondary}>
                      Some Body 1 Text Color Secondary
                    </Typography>
                    <Typography
                      variant='body1Bold'
                      color={({ astro }) => astro.ColorTextError}
                      p={({ spacing }) => spacing(2, 0, 3)}
                    >
                      Some Body Bold 1 Error Text
                    </Typography>
                    <Typography
                      color={({ astro }) => astro.ColorTextPlaceholder}
                    >
                      Some Body 1 Text Color Placeholder
                    </Typography>
                  </CardContent>
                </Card>
              ))}
          </Stack>
        </Stack>
      </Container>
    </AstroProvider>
  );
};

export default App;
