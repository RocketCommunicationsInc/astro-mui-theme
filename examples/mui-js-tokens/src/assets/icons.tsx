import { Box, SxProps, Theme } from '@mui/material';

type IconProps = {
  sx?: SxProps<Theme>;
};

const defaultIconSize = '1.5rem';
const defaultIconFill = '#4dacff';

export const Visibility = ({ sx }: IconProps) => (
  <Box
    component='svg'
    fill={defaultIconFill}
    width={defaultIconSize}
    height={defaultIconSize}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    sx={sx}
  >
    <title>Visibility</title>
    <path d='M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4Zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm-3-5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3Z'></path>
  </Box>
);

export const VisibilityOff = ({ sx }: IconProps) => (
  <Box
    component='svg'
    fill={defaultIconFill}
    width={defaultIconSize}
    height={defaultIconSize}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    sx={sx}
  >
    <title>Visibility Off</title>
    <path
      fillRule='evenodd'
      d='M2.71 4.57a.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0l16.31 16.33a.996.996 0 1 1-1.41 1.41l-2.72-2.72c-1.34.52-2.79.82-4.31.82-5 0-9.27-3.11-11-7.5.77-1.97 2.06-3.67 3.68-4.96L2.71 4.57ZM17 11.5c0-2.76-2.24-5-5-5-.51 0-1 .1-1.47.24L8.36 4.57C9.51 4.2 10.73 4 12 4c5 0 9.27 3.11 11 7.49-.69 1.76-1.79 3.3-3.18 4.53l-3.06-3.06c.14-.46.24-.95.24-1.46Zm-5 5c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07L14.14 16c-.65.32-1.37.5-2.14.5Zm2.97-5.33a2.97 2.97 0 0 0-2.64-2.64l2.64 2.64Z'
    ></path>
  </Box>
);

export const Warning = ({ sx }: IconProps) => (
  <Box
    component='svg'
    fill={defaultIconFill}
    width={defaultIconSize}
    height={defaultIconSize}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    sx={sx}
  >
    <title>Warning</title>
    <path
      fillRule='evenodd'
      d='M19.53 21c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3h15.06ZM12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1Zm-1 2v2h2v-2h-2Z'
    ></path>
  </Box>
);
