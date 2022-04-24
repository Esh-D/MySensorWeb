//import {Dimensions} from 'react-native';
//const {width, height} = Dimensions.get('window');
const width = window.innerWidth;
const height = window.innerHeight;

export const COLORS = {
  // base colors
  primary: '#194868', // Dark Blue
  secondary: '#FF615F', // peach

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#F5F7F9',
  lightGray2: '#FAFBFD',
  gray: '#BEC1D2',
  blue: '#0d9aff',
  darkgray: '#898C95',
  yellow: '#f5c045',
  lightBlue: '#95A9B8',
  darkgreen: '#008159',
  peach: '#FF615F',
  purple: '#8e44ad',
  red: '#FF0000',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14 + ((width - 441) / 441) * 14 * 0.5, // 14
  radius: 12 + ((width - 441) / 441) * 12 * 0.5, // 12
  padding: 24 + ((width - 441) / 441) * 24 * 0.5, // 24
  padding2: 36 + ((width - 441) / 441) * 36 * 0.5, // 36

  // font sizes (proportional to screen width)
  largeTitle: 50 + ((width - 441) / 441) * 50 * 0.5, // 50
  loading: 18 + ((width - 441) / 441) * 18 * 0.5, // 18
  h1: 30 + ((width - 441) / 441) * 30 * 0.5, // 30
  h2: 22 + ((width - 441) / 441) * 22 * 0.5, // 22
  h3: 16 + ((width - 441) / 441) * 16 * 0.5, // 16
  h4: 14 + ((width - 441) / 441) * 14 * 0.5, // 14
  body1: 30 + ((width - 441) / 441) * 30 * 0.5, // 30
  body2: 20 + ((width - 441) / 441) * 20 * 0.5, // 20
  body3: 16 + ((width - 441) / 441) * 16 * 0.5, // 16
  body4: 14 + ((width - 441) / 441) * 14 * 0.5, // 14
  body5: 12 + ((width - 441) / 441) * 12 * 0.5, // 12

  // app dimensions
  //width,
  //height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'System',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'System', fontSize: SIZES.h1, lineHeight: 36 * (width / 441)},
  h2: {fontFamily: 'System', fontSize: SIZES.h2, lineHeight: 30 * (width / 441)},
  h3: {fontFamily: 'System', fontSize: SIZES.h3, lineHeight: 22 * (width / 441)},
  h4: {fontFamily: 'System', fontSize: SIZES.h4, lineHeight: 22 * (width / 441)},
  body1: {fontFamily: 'System', fontSize: SIZES.body1, lineHeight: 36 * (width / 441)},
  body2: {fontFamily: 'System', fontSize: SIZES.body2, lineHeight: 30 * (width / 441)},
  body3: {fontFamily: 'System', fontSize: SIZES.body3, lineHeight: 22 * (width / 441)},
  body4: {fontFamily: 'System', fontSize: SIZES.body4, lineHeight: 22 * (width / 441)},
  body5: {fontFamily: 'System', fontSize: SIZES.body5, lineHeight: 20 * (width / 441)},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
