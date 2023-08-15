import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  TextField,
  Theme,
  Typography,
} from '@mui/material';

import { Visibility, VisibilityOff, Warning } from './assets/icons';

type Creds = {
  password: string;
  username: string;
};

const initialCreds: Creds = {
  password: '',
  username: '',
};

const helpText = 'This is the MUI TextField component with "Astrofied" styles.';
const userErrMsg = 'Username must be at least 3 characters long.';
const passErrMsg = 'Password must be between 8 and 16 characters long.';

const iconSx = ({ astro }: Theme) => ({
  width: astro.InputIconDimension,
  height: astro.InputIconDimension,
});

const errorSx = (theme: Theme) => ({
  ...iconSx(theme),
  fill: 'inherit',
});

const Error = ({ msg }: { msg: string }) => (
  <Stack component='span' direction='row' alignItems='center' spacing={2}>
    <Warning sx={errorSx} />
    <Box component='span'>{msg}</Box>
  </Stack>
);

const LoginForm = () => {
  const [creds, setCreds] = useState(initialCreds);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const toggleVisibility = () => setIsShowPassword((prev) => !prev);
  const ul = creds.username.length;
  const userErr = ul < 3;
  const pl = creds.password.length;
  const passErr = pl < 8 || pl > 16;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(creds);
    setCreds(initialCreds);
  };

  const handleCreds = (cred: { [key: string]: string }) => {
    setCreds((prev) => ({ ...prev, ...cred }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card sx={{ width: 448 }}>
        <CardContent>
          <Stack spacing={4} pb={4}>
            <Typography alignSelf='center' variant='display2'>
              Sign In
            </Typography>
            <TextField
              autoFocus
              label='Username'
              error={!!ul && userErr}
              helperText={
                !!ul && userErr ? <Error msg={userErrMsg} /> : helpText
              }
              value={creds.username}
              onChange={(e) => handleCreds({ username: e.target.value })}
            />
            <TextField
              label='Password'
              error={!!pl && passErr}
              type={isShowPassword ? 'text' : 'password'}
              helperText={
                !!pl && passErr ? <Error msg={passErrMsg} /> : helpText
              }
              value={creds.password}
              onChange={(e) => handleCreds({ password: e.target.value })}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={toggleVisibility} color='primary'>
                    {isShowPassword ? (
                      <VisibilityOff sx={iconSx} />
                    ) : (
                      <Visibility sx={iconSx} />
                    )}
                  </IconButton>
                ),
              }}
            />
          </Stack>

          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button type='submit'>Sign In</Button>
          </CardActions>
        </CardContent>
      </Card>
    </form>
  );
};

export default LoginForm;
