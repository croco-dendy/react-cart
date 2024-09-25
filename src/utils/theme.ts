import {extendTheme, ThemeConfig, ThemeOverride} from '@chakra-ui/react';
import '@fontsource/montserrat-alternates/400.css';
import '@fontsource/montserrat-alternates/600.css';
import '@fontsource/montserrat-alternates/800.css';
import '@fontsource-variable/montserrat';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const themeOverride: ThemeOverride = {
  config,
  fonts: {
    heading: `'Montserrat Alternates', sans-serif`,
    body: `'Montserrat Variable', sans-serif`,
  },
  semanticTokens: {
    colors: {
      error: '#f33636',
      success: '#36b359',
      primary: '#36b359',
      secondary: {
        default: '#dda10a',
        _dark: '#f1bf1a',
      },
      shadow: {
        default: '#cacaca',
        _dark: '#0a0a0a',
      },
      container: {
        default: '#e4e4e4',
        _dark: '#1a1a1a',
      },
      card: {
        default: '#fdfdfd',
        _dark: '#2a2a2a',
      },
      text: {
        default: '#1a1a1a',
        _dark: '#fdfdfd',
      },
      'text-subtle': {
        default: '#111111',
        _dark: '#d1d1d1',
      },
      'text-disabled': '#888888',
    },
  },
};

export default extendTheme(themeOverride);
