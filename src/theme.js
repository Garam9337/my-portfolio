import { createTheme } from '@mui/material/styles';

// 컬러 팔레트 디자인 시스템.md 의 CSS 변수를 그대로 반영한 값
const colors = {
  light: {
    primary: '#F5761E',
    primaryLight: '#FF9A52',
    primaryDark: '#C85A0F',
    secondary: '#E31C79',
    accent: '#8FBEE8',
    bgPrimary: '#F3EEE8',
    bgSecondary: '#EFDDC0',
    bgCard: '#FFFFFF',
    textPrimary: '#16253E',
    textSecondary: '#4A5A73',
    textMuted: '#8FBEE8',
    textInverse: '#FFFFFF',
    border: '#FF7A1E',
    borderLight: '#E8DCC8',
  },
  dark: {
    primary: '#FF8A3D',
    primaryLight: '#FF9A52',
    primaryDark: '#C85A0F',
    secondary: '#FF4D9A',
    accent: '#8FBEE8',
    bgPrimary: '#1A1611',
    bgSecondary: '#241E17',
    bgCard: '#2B241C',
    textPrimary: '#F3EEE8',
    textSecondary: '#C9C1B4',
    textMuted: '#8FBEE8',
    textInverse: '#16253E',
    border: '#FF8A3D',
    borderLight: '#3A3226',
  },
};

export const getTheme = (mode = 'light') => {
  const c = colors[mode] ?? colors.light;

  return createTheme({
    palette: {
      mode,
      primary: {
        main: c.primary,
        light: c.primaryLight,
        dark: c.primaryDark,
        contrastText: c.textInverse,
      },
      secondary: {
        main: c.secondary,
        contrastText: c.textInverse,
      },
      background: {
        default: c.bgPrimary,
        paper: c.bgCard,
      },
      text: {
        primary: c.textPrimary,
        secondary: c.textSecondary,
      },
      divider: c.borderLight,
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: "'Pretendard', 'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif",
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 600 },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: c.bgSecondary,
            color: c.textPrimary,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: `1px solid ${c.borderLight}`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            '&:hover': {
              backgroundColor: c.secondary,
            },
          },
        },
      },
    },
  });
};

export default getTheme;
