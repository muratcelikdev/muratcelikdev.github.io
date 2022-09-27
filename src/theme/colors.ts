import { ThemeType } from 'src/theme/ThemeProvider';

export const colors: Partial<Record<ThemeType, Palette>> = {
  light: {
    white: {
      default: '#FFFFFE',
    },
    lightGrey: {
      primary: '#EFF0F3',
      secondary: '#E4E5E9',
    },
    grey: {
      default: '#C0C0C0',
      dark: '#9A9494',
    },
    black: {
      default: '#2B2C34',
    },
    blue: {
      default: '#6246EA',
      light: '#9181db',
      dark: '#4528d4',
    },
  },
};
