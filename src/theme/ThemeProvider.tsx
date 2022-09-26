import { createContext, useContext, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { colors } from 'src/theme/colors';

export enum ThemeType {
  Light = 'light',
  Dark = 'dark',
}

export const ThemeContext = createContext<AppTheme>({
  theme: {
    colors: colors.light as Palette,
    selectedTheme: ThemeType.Light,
  },
});

interface ThemeProviderProps {
  children: JSX.Element[] | JSX.Element;
  defaultTheme?: ThemeType;
}

export const ThemeProvider = ({ children, defaultTheme }: ThemeProviderProps) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(defaultTheme || ThemeType.Light);

  const handleChangeTheme = (theme?: ThemeType) => {
    setSelectedTheme((state?: ThemeType) => {
      if (theme) {
        return theme;
      }

      if (state === ThemeType.Dark) {
        return ThemeType.Light;
      } else {
        return ThemeType.Dark;
      }
    });
  };

  const theme = useMemo(
    () => ({
      colors: colors[selectedTheme] as Palette,
      selectedTheme,
    }),
    [selectedTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const { theme, handleChangeTheme: changeTheme } = useContext(ThemeContext);

  return { theme, changeTheme };
};
