import { useState } from 'react';
import { RuxButton, RuxIcon, RuxInput } from '@astrouxds/react';
import { Box, Stack, StackProps, TextField, Typography } from '@mui/material';

const loginContainerProps: StackProps = {
  spacing: 4,
  py: 8,
  px: 6,
  bgcolor: ({ astro }) => astro.color.background.surface.default,
  borderRadius: ({ astro }) => astro.radius.base,
};

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

const Error = ({ msg }: { msg: string }) => (
  <Stack component='span' direction='row' alignItems='center' spacing={2}>
    <Box
      component={RuxIcon}
      icon='warning'
      size='1.25rem'
      sx={{ '::part(icon)': { color: ({ astro }) => astro.color.text.error } }}
    />
    <Box component='span'>{msg}</Box>
  </Stack>
);

export const LoginForm = () => {
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
      <Stack {...loginContainerProps}>
        <Typography alignSelf='center' variant='h2'>
          Sign In
        </Typography>
        <Stack spacing={4} pb={4}>
          <TextField
            // size='large'
            label='Username'
            error={!!ul && userErr}
            helperText={!!ul && userErr ? <Error msg={userErrMsg} /> : helpText}
            value={creds.username}
            onChange={(e) => handleCreds({ username: e.target.value })}
          />
          <RuxInput
            // size='large'
            label='Username'
            errorText={!!ul && userErr ? userErrMsg : ''}
            helpText='This is the default RuxInput component.'
            value={creds.username}
            onRuxinput={(e) => handleCreds({ username: e.target.value })}
          />
          <TextField
            // size='large'
            label='Password'
            error={!!pl && passErr}
            type={isShowPassword ? 'text' : 'password'}
            helperText={!!pl && passErr ? <Error msg={passErrMsg} /> : helpText}
            value={creds.password}
            onChange={(e) => handleCreds({ password: e.target.value })}
            InputProps={{
              endAdornment: (
                <Box
                  component={RuxButton}
                  icon={isShowPassword ? 'visibility-off' : 'visibility'}
                  onClick={toggleVisibility}
                  iconOnly
                  borderless
                  size='small'
                  sx={{ '::part(container)': { p: 0 } }}
                />
              ),
            }}
          />
          <RuxInput
            // size='large'
            label='Password'
            type='password'
            errorText={!!pl && passErr ? userErrMsg : ''}
            helpText='This is the default RuxInput component.'
            value={creds.password}
            onRuxinput={(e) => handleCreds({ password: e.target.value })}
          />
        </Stack>

        <Box component={RuxButton} type='submit' alignSelf='flex-end'>
          Sign In
        </Box>
      </Stack>
    </form>
  );
};
