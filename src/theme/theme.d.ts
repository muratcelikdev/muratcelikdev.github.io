enum BaseColors {
  white = 'white',
  lightGrey = 'lightGrey',
  grey = 'grey',
  black = 'black',
  blue = 'blue',
}

interface ColorTone {
  default?: string;
  primary?: string;
  secondary?: string;
  dark?: string;
  light?: string;
}

interface Palette {
  [BaseColors.white]: ColorTone;
  [BaseColors.lightGrey]: ColorTone;
  [BaseColors.grey]: ColorTone;
  [BaseColors.black]: ColorTone;
  [BaseColors.blue]: ColorTone;
}

interface AppTheme {
  theme?: Theme;
  handleChangeTheme?: ThemeType;
}

interface StyledProps extends Omit<AppTheme, 'handleChangeTheme'> {}
