import { Colors } from './Colors';

const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

const borderRadius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  round: 50,
};

const borderWidth = {
  thin: 0.5,
  regular: 1,
  medium: 1.5,
  thick: 2,
};

const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
};

const getBorderColor = (mode = 'light') => {
  return mode === 'light' ? '#ddd' : '#444';
};

const Theme = {
  spacing,
  borderRadius,
  borderWidth,
  shadows,
  getBorderColor,
  light: Colors.light,
  dark: Colors.dark
};

export default Theme;