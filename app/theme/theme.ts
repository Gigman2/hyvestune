import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '36em',
  md: '48em', // 768
  lg: '62em', // 992
  xl: '80em', // 1280
  '2xl': '85.375em', // 1366
  '3xl': '90em', // 1440
  '4xl': '96em', // 1536
  '5xl': '120em', // 1920
});

export const theme = extendTheme({
  styles: {
    global: () => ({
      'html, body': {
        fontFamily: '"CeraPro", sans-serif',
        fontWeight: 400,
      },
      body: {
        lineHeight: 'tall',
        color: 'gray.700',
        fontSize: 'md',
        fontWeight: 400,
      },
    }),
  },
  breakpoints,
  fonts: {
    heading: '"CeraPro", sans-serif',
    body: '"CeraPro", sans-serif',
  },
  fontSizes: {
    xx: '.55rem',
    tiny: '.68rem',
    '7xl': '5rem',
    '8xl': '6rem',
  },
  colors: {
    brandGrey: {
      100: '#828282'
    },
    htIndigo: {
      400: '#2a1b8c',
      500: '#12046B',
      600: '#0f0357',
    },
    htPink: {
      400: '#e667b3',
      500: '#E743A6',
      600: '#e32498',
    },
    htGradient: {
      500: 'linear-gradient(138.1deg, #12046B -4.72%, #D30B8F 109.38%)',
    },
  },
  space: {
    14: '3.5rem',
    60: '15rem',
    66: '17.5rem',
    70: '18rem',
    80: '20rem',
    82: '21rem',
    85: '23rem',
    90: '25rem',
    95: '26rem',
    108: '27rem',
    110: '30rem',
    115: '32rem',
    120: '35rem',
    121: '36rem',
    122: '37rem',
    123: '40rem',
    124: '42rem',
    125: '45rem',
    127: '48rem',
    129: '50rem',
    130: '55rem',
    135: '60rem',
    137: '65rem',
    140: '70rem',
    143: '72rem',
    145: '76rem',
    150: '80rem',
    155: '90rem',
  },
  sizes: {
    14: '3.5rem',
    60: '15rem',
    66: '17.5rem',
    70: '18rem',
    80: '20rem',
    82: '21rem',
    85: '23rem',
    90: '25rem',
    95: '26rem',
    108: '27rem',
    109: '28.125rem',
    110: '30rem',
    115: '32rem',
    120: '35rem',
    122: '37rem',
    123: '40rem',
    124: '42rem',
    125: '45rem',
    127: '48rem',
    129: '50rem',
    130: '55rem',
    135: '60rem',
    137: '65rem',
    140: '70rem',
    143: '72rem',
    145: '76rem',
    150: '80rem',
    155: '90rem',
  },
});
